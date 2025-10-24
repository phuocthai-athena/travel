import mongoose from "mongoose";

/**
 * @typedef {Object} ITourType
 * @property {string} name
 * @property {number} [status]
 * @property {mongoose.Types.ObjectId[]} [tours]
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {import("mongoose").Document & ITourType} ITourTypeDocument
 */

/**
 * @type {import("mongoose").Schema<ITourTypeDocument>}
 */
const tourTypeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    status: { type: Number, default: 1 },
    tours: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tour" }],
  },
  { timestamps: true }
);

/**
 * @type {import("mongoose").Model<ITourTypeDocument>}
 */
const TourTypeModel = mongoose.model("TourType", tourTypeSchema);

export default TourTypeModel;
