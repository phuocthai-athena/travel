import mongoose from "mongoose";

/**
 * @typedef {Object} ITourPromotion
 * @property {mongoose.Types.ObjectId} tourId
 * @property {mongoose.Types.ObjectId} promotionId
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {import("mongoose").Document & ITourPromotion} ITourPromotionDocument
 */

/**
 * @type {import("mongoose").Schema<ITourPromotionDocument>}
 */
const tourPromotionSchema = new mongoose.Schema(
  {
    tourId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tour",
      required: true,
    },
    promotionId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Promotion",
      required: true,
    },
  },
  { timestamps: true }
);

/**
 * @type {import("mongoose").Model<ITourPromotionDocument>}
 */
const TourPromotionModel = mongoose.model("TourPromotion", tourPromotionSchema);
export default TourPromotionModel;
