import mongoose from "mongoose";

/**
 * @typedef {Object} INotification
 * @property {mongoose.Types.ObjectId} [userId]
 * @property {string} [content]
 * @property {number} [status]
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {import("mongoose").Document & INotification} INotificationDocument
 */

/**
 * @type {import("mongoose").Schema<INotificationDocument>}
 */
const notificationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: { type: String },
    status: { type: Number, default: 0 },
  },
  { timestamps: true }
);

/**
 * @type {import("mongoose").Model<INotificationDocument>}
 */
const NotificationModel = mongoose.model("Notification", notificationSchema);

export default NotificationModel;
