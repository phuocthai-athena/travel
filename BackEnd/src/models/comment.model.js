import mongoose from "mongoose";

/**
 * @typedef {Object} IComment
 * @property {mongoose.Types.ObjectId} tourId
 * @property {mongoose.Types.ObjectId} userId
 * @property {string} [content]
 * @property {number} [rating]
 * @property {number} [featured]
 * @property {number} [status]
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {import("mongoose").Document & IComment} ICommentDocument
 */

/**
 * @type {import("mongoose").Schema<ICommentDocument>}
 */
const commentSchema = new mongoose.Schema(
  {
    tourId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tour",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: { type: String, maxLength: 1000 },
    rating: { type: Number, default: 0 },
    featured: { type: Number, default: 0 },
    status: { type: Number, default: 1 },
  },
  { timestamps: true }
);

const CommentModel = mongoose.model("Comment", commentSchema);
export default CommentModel;
