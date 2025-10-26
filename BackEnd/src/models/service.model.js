import mongoose from "mongoose";

/**
 * @typedef {Object} IService
 * @property {string} name
 * @property {string} [description]
 * @property {string} [icon]
 * @property {number} [loadHome]
 * @property {number} [status]
 * @property {mongoose.Types.ObjectId[]} [tours]
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {import("mongoose").Document & IService} IServiceDocument
 */

/**
 * @type {import("mongoose").Schema<IServiceDocument>}
 */
const serviceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    icon: { type: String },
    loadHome: { type: Number },
    status: { type: Number, default: 1 },
    tours: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tour" }],
  },
  { timestamps: true }
);

/**
 * @type {import("mongoose").Model<IServiceDocument>}
 */
const ServiceModel = mongoose.model("Service", serviceSchema);
export default ServiceModel;
