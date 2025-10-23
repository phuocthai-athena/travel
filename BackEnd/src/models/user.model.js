import mongoose from "mongoose";
import { hashValue, compareValue } from "../utils/bcrypt.js";

/**
 * @typedef {Object} IUser
 * @property {string} email
 * @property {string} password
 * @property {boolean} verified
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {import('mongoose').Document & IUser & {
 *   comparePassword: (val: string) => Promise<boolean>,
 *   omitPassword: () => Omit<IUser, 'password'>
 * }} IUserDocument
 */

/**
 * @type {import('mongoose').Schema<IUserDocument>}
 */
const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    verified: { type: Boolean, required: true, default: false },
  },
  { timestamps: true }
);

// middleware
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await hashValue(this.password);
  next();
});

// methods
userSchema.methods.comparePassword = async function (val) {
  return compareValue(val, this.password);
};

userSchema.methods.omitPassword = function () {
  const { password, ...user } = this.toObject();
  return user;
};

/**
 * @type {import('mongoose').Model<IUserDocument>}
 */
const UserModel = mongoose.model("User", userSchema);

export default UserModel;
