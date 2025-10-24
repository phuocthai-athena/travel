import mongoose from "mongoose";

/**
 * @typedef {Object} ISpending
 * @property {number} [daily]
 * @property {number} [weekly]
 * @property {number} [monthly]
 * @property {number} [yearly]
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {import("mongoose").Document & ISpending} ISpendingDocument
 */

/**
 * @type {import("mongoose").Schema<ISpendingDocument>}
 */
const spendingSchema = new mongoose.Schema(
  {
    daily: { type: Number, default: 0 },
    weekly: { type: Number, default: 0 },
    monthly: { type: Number, default: 0 },
    yearly: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const SpendingModel = mongoose.model("Spending", spendingSchema);
export default SpendingModel;
