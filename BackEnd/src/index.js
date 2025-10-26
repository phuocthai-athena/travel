import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectToDatabase from "./config/db.js";
import errorHandler from "./middleware/errorHandler.js";
import authenticate from "./middleware/authenticate.js";

import { OK } from "./constants/http.js";
import { APP_ORIGIN, NODE_ENV, PORT } from "./constants/env.js";

import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import sessionsRoutes from "./routes/session.route.js";
import tourRoutes from "./routes/tour.route.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: APP_ORIGIN, credentials: true }));
app.use(cookieParser());

app.get("/", async (req, res, next) => {
  res.status(OK).json({ status: "healthy" });
});

/**
 * API Routes
 */
// auth routes
app.use("/api/auth", authRoutes);

// protected routes
app.use("/api/user", authenticate, userRoutes);
app.use("/api/sessions", authenticate, sessionsRoutes);
app.use("/api/tour", tourRoutes);

app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT} in ${NODE_ENV} mode`);
  await connectToDatabase();
});
