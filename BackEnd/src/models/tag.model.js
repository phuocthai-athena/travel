import mongoose from "mongoose";

/**
 * @typedef {Object} ITag
 * @property {string} name
 * @property {number} [status]
 * @property {mongoose.Types.ObjectId[]} [news]
 * @property {Date} createdAt
 * @property {Date} updatedAt
 */

/**
 * @typedef {import("mongoose").Document & ITag} ITagDocument
 */

/**
 * @type {import("mongoose").Schema<ITagDocument>}
 */
const tagSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    status: { type: Number, default: 1 },
    news: [{ type: mongoose.Schema.Types.ObjectId, ref: "News" }],
  },
  { timestamps: true }
);

/**
 * @type {import("mongoose").Model<ITagDocument>}
 */
const TagModel = mongoose.model("Tag", tagSchema);

export default TagModel;
