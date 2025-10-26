import mongoose from "mongoose";

/**
 * @typedef {Object} ITourLocation
 * @property {mongoose.Types.ObjectId} tourId
 * @property {mongoose.Types.ObjectId} locationId
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {import("mongoose").Document & ITourLocation} ITourLocationDocument
 */

/**
 * @type {import("mongoose").Schema<ITourLocationDocument>}
 */
const tourLocationSchema = new mongoose.Schema(
  {
    tourId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tour",
      required: true,
    },
    locationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Location",
      required: true,
    },
  },
  { timestamps: true }
);

/**
 * @type {import("mongoose").Model<ITourLocationDocument>}
 */
const TourLocationModel = mongoose.model("TourLocation", tourLocationSchema);
export default TourLocationModel;
