import jwt from "jsonwebtoken";
import { JWT_REFRESH_SECRET, JWT_SECRET } from "../constants/env.js";

const defaults = {
  audience: ["user"],
};

const accessTokenSignOptions = {
  expiresIn: "15m",
  secret: JWT_SECRET,
};

export const refreshTokenSignOptions = {
  expiresIn: "30d",
  secret: JWT_REFRESH_SECRET,
};

export const signToken = (payload, options) => {
  const { secret, ...signOptions } = options || accessTokenSignOptions;
  return jwt.sign(payload, secret, {
    ...defaults,
    ...signOptions,
  });
};

export const verifyToken = (token, options) => {
  const { secret = JWT_SECRET, ...verifyOptions } = options || {};
  try {
    const payload = jwt.verify(token, secret, {
      ...defaults,
      ...verifyOptions,
    });
    return { payload };
  } catch (error) {
    return { error: error.message };
  }
};
