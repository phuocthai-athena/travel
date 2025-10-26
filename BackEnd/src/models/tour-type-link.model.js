import mongoose from "mongoose";

/**
 * @typedef {Object} ITourTypeLink
 * @property {mongoose.Types.ObjectId} tourId
 * @property {mongoose.Types.ObjectId} tourTypeId
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {import("mongoose").Document & ITourTypeLink} ITourTypeLinkDocument
 */

/**
 * @type {import("mongoose").Schema<ITourTypeLinkDocument>}
 */
const tourTypeLinkSchema = new mongoose.Schema(
  {
    tourId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tour",
      required: true,
    },
    tourTypeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "TourType",
      required: true,
    },
  },
  { timestamps: true }
);

/**
 * @type {import("mongoose").Model<ITourTypeLinkDocument>}
 */
const TourTypeLinkModel = mongoose.model("TourTypeLink", tourTypeLinkSchema);
export default TourTypeLinkModel;
