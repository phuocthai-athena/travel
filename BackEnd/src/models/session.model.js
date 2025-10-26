import mongoose from "mongoose";
import { thirtyDaysFromNow } from "../utils/date.js";

const sessionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", index: true },
  userAgent: { type: String },
  createdAt: { type: Date, required: true, default: Date.now },
  expiresAt: { type: Date, default: thirtyDaysFromNow() },
});

const SessionModel = mongoose.model("Session", sessionSchema);
export default SessionModel;
