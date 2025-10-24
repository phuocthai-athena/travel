import mongoose from "mongoose";

/**
 * @typedef {Object} IUserRole
 * @property {mongoose.Types.ObjectId} userId
 * @property {mongoose.Types.ObjectId} roleId
 * @property {string} [quote]
 * @property {string} [website]
 * @property {string} [skills]
 * @property {string} [facebook]
 * @property {string} [github]
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {import("mongoose").Document & IUserRole} IUserRoleDocument
 */

/**
 * @type {import("mongoose").Schema<IUserRoleDocument>}
 */
const userRoleSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    roleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
      required: true,
    },
    quote: { type: String, maxLength: 1000 },
    website: { type: String },
    skills: { type: String, maxLength: 5000 },
    facebook: { type: String, maxLength: 500 },
    github: { type: String, maxLength: 500 },
  },
  { timestamps: true }
);

/**
 * @type {import("mongoose").Model<IUserRoleDocument>}
 */
const UserRoleModel = mongoose.model("UserRole", userRoleSchema);

export default UserRoleModel;
