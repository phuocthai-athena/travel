import mongoose from "mongoose";

/**
 * @typedef {Object} INewsTag
 * @property {mongoose.Types.ObjectId} newsId - ref: News
 * @property {mongoose.Types.ObjectId} tagId - ref: Tag
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {import("mongoose").Document & INewsTag} INewsTagDocument
 */

/**
 * @type {import("mongoose").Schema<INewsTagDocument>}
 */
const newsTagSchema = new mongoose.Schema(
  {
    newsId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "News",
      required: true,
    },
    tagId: { type: mongoose.Schema.Types.ObjectId, ref: "Tag", required: true },
  },
  { timestamps: true }
);

/**
 * @type {import("mongoose").Model<INewsTagDocument>}
 */
const NewsTagModel = mongoose.model("NewsTag", newsTagSchema);

export default NewsTagModel;
