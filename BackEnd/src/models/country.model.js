import mongoose from "mongoose";

/**
 * @typedef {Object} ICountry
 * @property {string} name
 * @property {number} [status]
 * @property {mongoose.Types.ObjectId[]} [locations]
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {import("mongoose").Document & ICountry} ICountryDocument
 */

/**
 * @type {import("mongoose").Schema<ICountryDocument>}
 */
const countrySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    status: { type: Number, default: 1 },
    locations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Location" }],
  },
  { timestamps: true }
);

/**
 * @type {import("mongoose").Model<ICountryDocument>}
 */
const CountryModel = mongoose.model("Country", countrySchema);

export default CountryModel;
