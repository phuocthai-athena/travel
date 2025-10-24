import mongoose from "mongoose";

/**
 * @typedef {Object} IImage
 * @property {string} [url]
 * @property {string} [imageName]
 * @property {number} [status]
 * @property {number} [isBanner]
 * @property {mongoose.Types.ObjectId} [tourId]
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {import("mongoose").Document & IImage} IImageDocument
 */

/**
 * @type {import("mongoose").Schema<IImageDocument>}
 */
const imageSchema = new mongoose.Schema(
  {
    url: { type: String, maxLength: 1000 },
    imageName: { type: String, maxLength: 1000 },
    status: { type: Number, default: 1 },
    isBanner: { type: Number, default: 0 },
    tourId: { type: mongoose.Schema.Types.ObjectId, ref: "Tour" },
  },
  { timestamps: true }
);

/**
 * @type {import("mongoose").Model<IImageDocument>}
 */
const ImageModel = mongoose.model("Image", imageSchema);

export default ImageModel;
