import mongoose from "mongoose";

/**
 * @typedef {Object} IPersonalInvoice
 * @property {mongoose.Types.ObjectId} [userId]
 * @property {string} [departurePlace]
 * @property {string} [departureDate]
 * @property {string} [destination]
 * @property {number} [price]
 * @property {string} [note]
 * @property {number} [approvalStatus]
 * @property {number} [agree]
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {import("mongoose").Document & IPersonalInvoice} IPersonalInvoiceDocument
 */

/**
 * @type {import("mongoose").Schema<IPersonalInvoiceDocument>}
 */
const personalInvoiceSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    departurePlace: { type: String },
    departureDate: { type: String },
    destination: { type: String },
    price: { type: Number, default: 0 },
    note: { type: String, maxLength: 1000 },
    approvalStatus: { type: Number, default: 0 },
    agree: { type: Number, default: 0 },
  },
  { timestamps: true }
);

/**
 * @type {import("mongoose").Model<IPersonalInvoiceDocument>}
 */
const PersonalInvoiceModel = mongoose.model(
  "PersonalInvoice",
  personalInvoiceSchema
);

export default PersonalInvoiceModel;
