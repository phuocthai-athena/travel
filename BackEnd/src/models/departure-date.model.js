import mongoose from "mongoose";

/**
 * @typedef {Object} IDepartureDate
 * @property {string} [date]
 * @property {number} [status]
 * @property {mongoose.Types.ObjectId[]} [tours]
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {import("mongoose").Document & IDepartureDate} IDepartureDateDocument
 */

/**
 * @type {import("mongoose").Schema<IDepartureDateDocument>}
 */
const departureDateSchema = new mongoose.Schema(
  {
    date: { type: String },
    status: { type: Number, default: 1 },
    tours: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tour" }],
  },
  { timestamps: true }
);

/**
 * @type {import("mongoose").Model<IDepartureDateDocument>}
 */
const DepartureDateModel = mongoose.model("DepartureDate", departureDateSchema);

export default DepartureDateModel;
