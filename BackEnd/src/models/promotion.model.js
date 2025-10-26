import mongoose from "mongoose";

/**
 * @typedef {Object} IPromotion
 * @property {string} name
 * @property {number} [discountValue]
 * @property {number} [status]
 * @property {mongoose.Types.ObjectId[]} [tours]
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {import("mongoose").Document & IPromotion} IPromotionDocument
 */

/**
 * @type {import("mongoose").Schema<IPromotionDocument>}
 */
const promotionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    discountValue: { type: Number, default: 0 },
    status: { type: Number, default: 1 },
    tours: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tour" }],
  },
  { timestamps: true }
);

/**
 * @type {import("mongoose").Model<IPromotionDocument>}
 */
const PromotionModel = mongoose.model("Promotion", promotionSchema);

export default PromotionModel;
