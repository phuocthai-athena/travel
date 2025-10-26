import mongoose from "mongoose";

/**
 * @typedef {Object} ITour
 * @property {string} name
 * @property {string} [imageUrl]
 * @property {string} [imageName]
 * @property {number} [adultPrice]
 * @property {number} [childPrice]
 * @property {number} [babyPrice]
 * @property {string} [trailer]
 * @property {string} [tourDetails]
 * @property {string} [note]
 * @property {number} [position]
 * @property {string} [map]
 * @property {number} [status]
 * @property {number} [numberOfPeople]
 * @property {number} [duration]
 * @property {mongoose.Types.ObjectId[]} [users]
 * @property {mongoose.Types.ObjectId[]} [services]
 * @property {mongoose.Types.ObjectId[]} [departureDates]
 * @property {mongoose.Types.ObjectId[]} [tourTypes]
 * @property {mongoose.Types.ObjectId[]} [locations]
 * @property {mongoose.Types.ObjectId[]} [promotions]
 * @property {mongoose.Types.ObjectId[]} [images]
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {import("mongoose").Document & ITour} ITourDocument
 */

/**
 * @type {import("mongoose").Schema<ITourDocument>}
 */
const tourSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, maxLength: 128 },
    imageUrl: { type: String, maxLength: 5000 },
    imageName: { type: String, maxLength: 1000 },
    adultPrice: { type: Number },
    childPrice: { type: Number },
    babyPrice: { type: Number },
    trailer: { type: String, maxLength: 1000 },
    tourDetails: { type: String },
    note: { type: String },
    position: { type: Number },
    map: { type: String, maxLength: 5000 },
    status: { type: Number, default: 1 },
    numberOfPeople: { type: Number },
    duration: { type: Number },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    services: [{ type: mongoose.Schema.Types.ObjectId, ref: "Service" }],
    departureDates: [
      { type: mongoose.Schema.Types.ObjectId, ref: "DepartureDate" },
    ],
    tourTypes: [{ type: mongoose.Schema.Types.ObjectId, ref: "TourType" }],
    locations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Location" }],
    promotions: [{ type: mongoose.Schema.Types.ObjectId, ref: "Promotion" }],
    images: [{ type: mongoose.Schema.Types.ObjectId, ref: "Image" }],
  },
  { timestamps: true }
);

/**
 * @type {import("mongoose").Model<ITourDocument>}
 */
const TourModel = mongoose.model("Tour", tourSchema);
export default TourModel;
