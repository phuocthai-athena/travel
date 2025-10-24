import mongoose from "mongoose";

/**
 * @typedef {Object} IContact
 * @property {string} [phone]
 * @property {string} [email]
 * @property {string} [content]
 * @property {string} [address]
 * @property {number} [status]
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {import("mongoose").Document & IContact} IContactDocument
 */

/**
 * @type {import("mongoose").Schema<IContactDocument>}
 */
const contactSchema = new mongoose.Schema(
  {
    phone: { type: String },
    email: { type: String },
    content: { type: String, maxLength: 500 },
    address: { type: String, maxLength: 1000 },
    status: { type: Number, default: 1 },
  },
  { timestamps: true }
);

/**
 * @type {import("mongoose").Model<IContactDocument>}
 */
const ContactModel = mongoose.model("Contact", contactSchema);

export default ContactModel;
