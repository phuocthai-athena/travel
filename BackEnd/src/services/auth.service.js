import UserModel from "../models/user.model.js";
import SessionModel from "../models/session.model.js";
import VerificationCodeModel from "../models/verification-code.model.js";
import appAssert from "../utils/app-assert.js";
import {
  fiveMinutesAgo,
  ONE_DAY_MS,
  oneHourFromNow,
  oneYearFromNow,
  thirtyDaysFromNow,
} from "../utils/date.js";
import {
  refreshTokenSignOptions,
  signToken,
  verifyToken,
} from "../utils/jwt.js";
import { sendMail } from "../utils/sendMail.js";
import {
  getVerifyEmailTemplate,
  getPasswordResetTemplate,
} from "../utils/emailTemplate.js";
import {
  CONFLICT,
  INTERNAL_SERVER_ERROR,
  NOT_FOUND,
  TOO_MANY_REQUESTS,
  UNAUTHORIZED,
} from "../constants/http.js";
import { APP_ORIGIN } from "../constants/env.js";
import VerificationCodeType from "../constants/verification-code-type.js";
import { hashValue } from "../utils/bcrypt.js";

export const createAccount = async (data) => {
  // verify existing user doesn't exist
  const existingUser = await UserModel.exists({ email: data.email });

  appAssert(!existingUser, CONFLICT, "Email already in use");

  // create user
  const user = await UserModel.create({
    email: data.email,
    password: data.password,
  });

  // create verification code
  const verificationCode = await VerificationCodeModel.create({
    userId: user._id,
    type: VerificationCodeType.EmailVerification,
    expiresAt: oneYearFromNow(),
  });

  const url = `${APP_ORIGIN}/email/verify/${verificationCode._id}`;
  // send verification email
  const { error } = await sendMail({
    to: user.email,
    ...getVerifyEmailTemplate(url),
  });

  if (error) {
    console.log(error);
  }

  // create session
  const session = await SessionModel.create({
    userId: user._id,
    userAgent: data.userAgent,
  });

  const sessionInfo = { sessionId: session._id };
  // sign access token & refresh token
  const refreshToken = signToken(sessionInfo, refreshTokenSignOptions);
  const accessToken = signToken({ ...sessionInfo, userId: user._id });

  // return user & tokens
  return {
    user: user.omitPassword(),
    accessToken,
    refreshToken,
  };
};

export const loginUser = async ({ email, password, userAgent }) => {
  // get the user by email
  const user = await UserModel.findOne({ email });
  appAssert(user, UNAUTHORIZED, "Invalid email or password");

  // validate password from the request
  const inValid = await user.comparePassword(password);
  appAssert(inValid, UNAUTHORIZED, "Invalid email or password");

  const userId = user._id;
  // create a session
  const session = await SessionModel.create({
    userId,
    userAgent,
  });

  const sessionInfo = { sessionId: session._id };
  // sign access token & refresh token
  const refreshToken = signToken(sessionInfo, refreshTokenSignOptions);
  const accessToken = signToken({ ...sessionInfo, userId: user._id });

  // return user & tokens
  return {
    user: user.omitPassword(),
    accessToken,
    refreshToken,
  };
};

export const refreshUserAccessToken = async (refreshToken) => {
  const { payload } = verifyToken(refreshToken, {
    secret: refreshTokenSignOptions.secret,
  });
  appAssert(payload, UNAUTHORIZED, "Invalid refresh token");

  const session = await SessionModel.findById(payload.sessionId);
  const now = Date.now();
  appAssert(
    session && session.expiresAt.getTime() > now,
    UNAUTHORIZED,
    "Session expired"
  );

  // refresh the session if it expires in the next 24 hours
  const sessionNeedsRefresh = session.expiresAt.getTime() - now <= ONE_DAY_MS;

  if (sessionNeedsRefresh) {
    session.expiresAt = thirtyDaysFromNow();
    await session.save();
  }

  const newRefreshToken = sessionNeedsRefresh
    ? signToken({ sessionId: session._id }, refreshTokenSignOptions)
    : undefined;

  const accessToken = signToken({
    userId: session.userId,
    sessionId: session._id,
  });

  return {
    accessToken,
    newRefreshToken,
  };
};

export const verifyEmail = async (code) => {
  // get the verification code
  const validCode = await VerificationCodeModel.findOne({
    _id: code,
    type: VerificationCodeType.EmailVerification,
    expiresAt: { $gt: new Date() },
  });
  appAssert(validCode, NOT_FOUND, "Invalid or expired verification code");

  // update user to verified true
  const updatedUser = await UserModel.findByIdAndUpdate(
    validCode.userId,
    { verified: true },
    { new: true }
  );
  appAssert(updatedUser, INTERNAL_SERVER_ERROR, "Failed to verify email");

  // delete verification code
  await validCode.deleteOne();
  // return user

  return {
    user: updatedUser.omitPassword(),
  };
};

export const sendForgotPasswordEmail = async (email) => {
  // get the user by email
  const user = await UserModel.findOne({ email });
  appAssert(user, NOT_FOUND, "User not found");

  // check email rate limit
  const fiveMinAgo = fiveMinutesAgo();
  const count = await VerificationCodeModel.countDocuments({
    userId: user._id,
    type: VerificationCodeType.PasswordReset,
    createdAt: { $gt: fiveMinAgo },
  });
  appAssert(
    count <= 1,
    TOO_MANY_REQUESTS,
    "Too many requests, please try again later"
  );

  // create verification code
  const expiresAt = oneHourFromNow();
  const verificationCode = await VerificationCodeModel.create({
    userId: user._id,
    type: VerificationCodeType.PasswordReset,
    expiresAt,
  });

  // send verification email
  const url = `${APP_ORIGIN}/reset-password?code=${
    verificationCode._id
  }&exp=${expiresAt.getTime()}`;

  const { data, error } = await sendMail({
    to: user.email,
    ...getPasswordResetTemplate(url),
  });
  appAssert(
    data?._id,
    INTERNAL_SERVER_ERROR,
    `${error?.name} - ${error?.message}`
  );

  // return success
  return {
    url,
    emailId: data.id,
  };
};

export const resetPassword = async ({ password, verificationCode }) => {
  // get the verification code
  const validCode = await VerificationCodeModel.findOne({
    _id: verificationCode,
    type: VerificationCodeType.PasswordReset,
    expiresAt: { $gt: new Date() },
  });
  appAssert(validCode, NOT_FOUND, "Invalid or expired verification code");

  // update the users password
  const updatedUser = await UserModel.findByIdAndUpdate(validCode.userId, {
    password: await hashValue(password),
  });
  appAssert(updatedUser, INTERNAL_SERVER_ERROR, "Failed to reset password");

  // delete the verification code
  await validCode.deleteOne();

  // delete all sessions
  await SessionModel.deleteMany({ userId: updatedUser._id });

  // return user
  return {
    user: updatedUser.omitPassword(),
  };
};
