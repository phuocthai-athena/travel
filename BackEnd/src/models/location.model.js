import mongoose from "mongoose";

/**
 * @typedef {Object} ILocation
 * @property {string} name
 * @property {number} [status]
 * @property {mongoose.Types.ObjectId} [countryId]
 * @property {mongoose.Types.ObjectId[]} [tours]
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {import("mongoose").Document & ILocation} ILocationDocument
 */

/**
 * @type {import("mongoose").Schema<ILocationDocument>}
 */
const locationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    status: { type: Number, default: 1 },
    countryId: { type: mongoose.Schema.Types.ObjectId, ref: "Country" },
    tours: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tour" }],
  },
  { timestamps: true }
);

/**
 * @type {import("mongoose").Model<ILocationDocument>}
 */
const LocationModel = mongoose.model("Location", locationSchema);

export default LocationModel;
