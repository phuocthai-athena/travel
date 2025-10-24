import mongoose from "mongoose";

/**
 * @typedef {Object} ITravelGuide
 * @property {string} name
 * @property {string} [icon]
 * @property {string} [content]
 * @property {number} [status]
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {import("mongoose").Document & ITravelGuide} ITravelGuideDocument
 */

/**
 * @type {import("mongoose").Schema<ITravelGuideDocument>}
 */
const travelGuideSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    icon: { type: String },
    content: { type: String, maxLength: 500 },
    status: { type: Number, default: 1 },
  },
  { timestamps: true }
);

const TravelGuideModel = mongoose.model("TravelGuide", travelGuideSchema);
export default TravelGuideModel;
