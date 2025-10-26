import mongoose from "mongoose";

/**
 * @typedef {Object} ITourService
 * @property {mongoose.Types.ObjectId} tourId
 * @property {mongoose.Types.ObjectId} serviceId
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {import("mongoose").Document & ITourService} ITourServiceDocument
 */

/**
 * @type {import("mongoose").Schema<ITourServiceDocument>}
 */
const TourServiceSchema = new mongoose.Schema(
  {
    tourId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tour",
      required: true,
    },
    serviceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },
  },
  { timestamps: true }
);

/**
 * @type {import("mongoose").Model<ITourServiceDocument>}
 */
const TourServiceModel = mongoose.model("TourService", TourServiceSchema);
export default TourServiceModel;
