import UserModel from "../models/user.model.js";
import appAssert from "../utils/app-assert.js";
import catchErrors from "../utils/catch-errors.js";
import { NOT_FOUND, OK } from "../constants/http.js";

export const getUserHandler = catchErrors(async (req, res) => {
  const user = await UserModel.findById(req.userId);
  appAssert(user, NOT_FOUND, "User not found");
  return res.status(OK).json(user.omitPassword());
});
