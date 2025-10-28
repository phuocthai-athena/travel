import { z } from "zod";
import mongoose from "mongoose";
import AppError from "../utils/app-error.js";
import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../constants/http.js";
import { clearAuthCookies, REFRESH_PATH } from "../utils/cookies.js";

const handleZodError = (res, error) => {
  const errors = error.issues.map((err) => ({
    path: err.path.join("."),
    message: err.message,
  }));

  return res.status(BAD_REQUEST).json({ message: error.message, errors });
};

const handleAppError = (res, error) => {
  return res
    .status(error.statusCode)
    .json({ message: error.message, errorCode: error.errorCode });
};

const handleCastError = (res, error) => {
  const { path, reason } = error;

  return res.status(BAD_REQUEST).json({
    message: reason?.message || "Invalid value",
    errorCode: `INVALID_${path.toUpperCase() || "VALUE"}`,
  });
};

/**
 * Unified error handler (last middleware)
 */
const errorHandler = (error, req, res, next) => {
  console.log(`PATH: ${req.path}`, error);

  if (req.path === REFRESH_PATH) {
    clearAuthCookies(res);
  }

  if (error instanceof z.ZodError) {
    return handleZodError(res, error);
  }

  if (error instanceof AppError) {
    return handleAppError(res, error);
  }

  if (
    error.name === "CastError" ||
    error instanceof mongoose.Error.CastError ||
    error.kind === "ObjectId"
  ) {
    return handleCastError(res, error);
  }

  return res.status(INTERNAL_SERVER_ERROR).json({
    message: "Internal Server Error",
  });
};

export default errorHandler;
