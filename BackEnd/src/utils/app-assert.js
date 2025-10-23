import assert from "node:assert";
import AppError from "./app-error.js";

/**
 * Asserts a condition and throws an AppError if the condition is falsy.
 */
const appAssert = (condition, httpStatusCode, message, errorCode) =>
  assert(condition, new AppError(httpStatusCode, message, errorCode));

export default appAssert;
