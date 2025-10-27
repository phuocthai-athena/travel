import { INTERNAL_SERVER_ERROR, OK } from "../constants/http.js";

export const successResponse = (
  res,
  data,
  message = "Success",
  statusCode = OK
) => {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
  });
};

export const errorResponse = (
  res,
  message = "Something went wrong",
  statusCode = INTERNAL_SERVER_ERROR,
  error = null
) => {
  return res.status(statusCode).json({
    success: false,
    message,
    error,
  });
};
