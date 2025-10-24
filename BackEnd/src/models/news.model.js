import mongoose from "mongoose";

/**
 * @typedef {Object} INews
 * @property {string} name
 * @property {string} [summary]
 * @property {string} [content]
 * @property {string} [author]
 * @property {string} [image]
 * @property {string} [imageName]
 * @property {string} [facebook]
 * @property {string} [instagram]
 * @property {string} [twitch]
 * @property {number} [status]
 * @property {mongoose.Types.ObjectId[]} [tags]
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {import("mongoose").Document & INews} INewsDocument
 */

/**
 * @type {import("mongoose").Schema<INewsDocument>}
 */
const newsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    summary: { type: String, maxLength: 1000 },
    content: { type: String },
    author: { type: String },
    image: { type: String, maxLength: 5000 },
    imageName: { type: String, maxLength: 1000 },
    facebook: { type: String, maxLength: 500 },
    instagram: { type: String, maxLength: 500 },
    twitch: { type: String, maxLength: 500 },
    status: { type: Number, default: 1 },
    tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],
  },
  { timestamps: true }
);

/**
 * @type {import("mongoose").Model<INewsDocument>}
 */
const NewsModel = mongoose.model("News", newsSchema);

export default NewsModel;
