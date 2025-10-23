import {
  emailSchema,
  loginSchema,
  registerSchema,
  resetPasswordSchema,
  verificationCodeSchema,
} from "./auth.schema.js";
import {
  createAccount,
  loginUser,
  refreshUserAccessToken,
  resetPassword,
  sendForgotPasswordEmail,
  verifyEmail,
} from "../services/auth.service.js";
import SessionModel from "../models/session.model.js";
import { verifyToken } from "../utils/jwt.js";
import appAssert from "../utils/app-assert.js";
import catchErrors from "../utils/catch-errors.js";
import {
  clearAuthCookies,
  getAccessTokenCookieOptions,
  getRefreshTokenCookieOptions,
  setAuthCookies,
} from "../utils/cookies.js";
import { CREATED, OK, UNAUTHORIZED } from "../constants/http.js";

export const registerHandler = catchErrors(async (req, res) => {
  // validate request
  const request = registerSchema.parse({
    ...req.body,
    userAgent: req.headers["user-agent"],
  });

  // cal service
  const { user, accessToken, refreshToken } = await createAccount(request);

  // return response
  return setAuthCookies({ res, accessToken, refreshToken })
    .status(CREATED)
    .json(user);
});

export const loginHandler = catchErrors(async (req, res) => {
  // validate request
  const request = loginSchema.parse({
    ...req.body,
    userAgent: req.headers["user-agent"],
  });

  // call service
  const { accessToken, refreshToken } = await loginUser(request);

  return setAuthCookies({ res, accessToken, refreshToken })
    .status(OK)
    .json({ message: "Login successful" });
});

export const logoutHandler = catchErrors(async (req, res) => {
  const accessToken = req.cookies.accessToken;
  const { payload } = verifyToken(accessToken);

  if (payload) {
    await SessionModel.findByIdAndDelete(payload.sessionId);
  }

  return clearAuthCookies(res)
    .status(OK)
    .json({ message: "Logout successful" });
});

export const refreshHandler = catchErrors(async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  appAssert(refreshToken, UNAUTHORIZED, "Missing refresh token");

  const { accessToken, newRefreshToken } = await refreshUserAccessToken(
    refreshToken
  );

  if (newRefreshToken) {
    res.cookie("refreshToken", newRefreshToken, getRefreshTokenCookieOptions());
  }

  return res
    .status(OK)
    .cookie("accessToken", accessToken, getAccessTokenCookieOptions())
    .json({ message: "Access token refreshed" });
});

export const verifyEmailHandler = catchErrors(async (req, res) => {
  const verificationCode = verificationCodeSchema.parse(req.params.code);

  await verifyEmail(verificationCode);

  return res.status(OK).json({ message: "Email was successfully verified" });
});

export const sendForgotPasswordHandler = catchErrors(async (req, res) => {
  const email = emailSchema.parse(req.body.email);

  await sendForgotPasswordEmail(email);

  return res.status(OK).json({
    message: "Password reset email sent",
  });
});

export const resetPasswordHandler = catchErrors(async (req, res) => {
  const request = resetPasswordSchema.parse(req.body);
  console.log("🚀 ~ request:", request);

  await resetPassword(request);

  return clearAuthCookies(res).status(OK).json({
    message: "Password reset successful",
  });
});
