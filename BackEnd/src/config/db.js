import mongoose from "mongoose";
import { MONGODB_URI } from "../constants/env.js";

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Successfully connected to database");
  } catch (error) {
    console.error("Error connecting to database", error);
    process.exit(1);
  }
};

export default connectToDatabase;
