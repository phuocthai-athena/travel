import mongoose from "mongoose";

/**
 * @typedef {Object} ISocialNetwork
 * @property {string} name
 * @property {string} [color]
 * @property {string} [icon]
 * @property {string} [link]
 * @property {number} [status]
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {import("mongoose").Document & ISocialNetwork} ISocialNetworkDocument
 */

/**
 * @type {import("mongoose").Schema<ISocialNetworkDocument>}
 */
const socialNetworkSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    color: { type: String },
    icon: { type: String },
    link: { type: String },
    status: { type: Number, default: 1 },
  },
  { timestamps: true }
);

/**
 * @type {import("mongoose").Model<ISocialNetworkDocument>}
 */
const SocialNetworkModel = mongoose.model("SocialNetwork", socialNetworkSchema);

export default SocialNetworkModel;
