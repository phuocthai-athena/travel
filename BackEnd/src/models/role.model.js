import mongoose from "mongoose";

/**
 * @typedef {Object} IRole
 * @property {string} name
 * @property {number} [status]
 * @property {string} [description]
 * @property {mongoose.Types.ObjectId[]} [users]
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {import("mongoose").Document & IRole} IRoleDocument
 */

/**
 * @type {import("mongoose").Schema<IRoleDocument>}
 */
const roleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    status: { type: Number, default: 1 },
    description: { type: String, maxLength: 1000 },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

/**
 * @type {import("mongoose").Model<IRoleDocument>}
 */
const RoleModel = mongoose.model("Role", roleSchema);

export default RoleModel;
