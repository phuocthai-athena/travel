import mongoose from "mongoose";

/**
 * @typedef {Object} IInvoice
 * @property {number} [adults]
 * @property {number} [children]
 * @property {number} [babies]
 * @property {string} [departureDate]
 * @property {number} [totalPrice]
 * @property {mongoose.Types.ObjectId} [userId]
 * @property {mongoose.Types.ObjectId} [tourId]
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {import("mongoose").Document & IInvoice} IInvoiceDocument
 */

/**
 * @type {import("mongoose").Schema<IInvoiceDocument>}
 */
const invoiceSchema = new mongoose.Schema(
  {
    adults: { type: Number, default: 0 },
    children: { type: Number, default: 0 },
    babies: { type: Number, default: 0 },
    departureDate: { type: String },
    totalPrice: { type: Number, default: 0 },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tourId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tour",
      required: true,
    },
  },
  { timestamps: true }
);

/**
 * @type {import("mongoose").Model<IInvoiceDocument>}
 */
const InvoiceModel = mongoose.model("Invoice", invoiceSchema);

export default InvoiceModel;
