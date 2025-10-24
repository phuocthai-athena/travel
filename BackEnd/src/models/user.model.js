import mongoose from "mongoose";
import { hashValue, compareValue } from "../utils/bcrypt.js";

/**
 * @typedef {Object} IUser
 * @property {string} name
 * @property {number} [gender]
 * @property {string} email
 * @property {string} password
 * @property {string} [avatar]
 * @property {string} [imageName]
 * @property {string} [address]
 * @property {string} [phone]
 * @property {string} [birthDate]
 * @property {number} [status]
 * @property {boolean} verified
 * @property {mongoose.Types.ObjectId[]} [roles]
 * @property {mongoose.Types.ObjectId[]} [tours]
 * @property {mongoose.Types.ObjectId[]} [personalInvoices]
 * @property {mongoose.Types.ObjectId[]} [notifications]
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {import("mongoose").Document & IUser & {
 *   comparePassword: (val: string) => Promise<boolean>,
 *   omitPassword: () => Omit<IUser, "password">
 * }} IUserDocument
 */

/**
 * @type {import("mongoose").Schema<IUserDocument>}
 */
const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    gender: { type: Number },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    avatar: { type: String, maxLength: 1000 },
    imageName: { type: String, maxLength: 500 },
    address: { type: String },
    phone: { type: String },
    birthDate: { type: String },
    status: { type: Number, default: 1 },
    verified: { type: Boolean, required: true, default: false },

    // 🔗 Relationships
    roles: [{ type: mongoose.Schema.Types.ObjectId, ref: "Role" }],
    tours: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tour" }],
    personalInvoices: [
      { type: mongoose.Schema.Types.ObjectId, ref: "PersonalInvoice" },
    ],
    notifications: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Notification" },
    ],
  },
  { timestamps: true }
);

// 🔒 middleware: hash password before save
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await hashValue(this.password);
  next();
});

// 🔑 methods
userSchema.methods.comparePassword = async function (val) {
  return compareValue(val, this.password);
};

userSchema.methods.omitPassword = function () {
  const { password, ...user } = this.toObject();
  return user;
};

/**
 * @type {import("mongoose").Model<IUserDocument>}
 */
const UserModel = mongoose.model("User", userSchema);

export default UserModel;
