import mongoose from "mongoose";

/**
 * @typedef {Object} ITourDepartureDate
 * @property {mongoose.Types.ObjectId} tourId
 * @property {mongoose.Types.ObjectId} departureDateId
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {import("mongoose").Document & ITourDepartureDate} ITourDepartureDateDocument
 */

/**
 * @type {import("mongoose").Schema<ITourDepartureDateDocument>}
 */
const tourDepartureDateSchema = new mongoose.Schema(
  {
    tourId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tour",
      required: true,
    },
    departureDateId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DepartureDate",
      required: true,
    },
  },
  { timestamps: true }
);

/**
 * @type {import("mongoose").Model<ITourDepartureDateDocument>}
 */
const TourDepartureDateModel = mongoose.model(
  "TourDepartureDate",
  tourDepartureDateSchema
);
export default TourDepartureDateModel;
