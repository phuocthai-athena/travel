import { Router } from "express";

import {
  loginHandler,
  logoutHandler,
  refreshHandler,
  registerHandler,
  resetPasswordHandler,
  sendForgotPasswordHandler,
  verifyEmailHandler,
} from "../controllers/auth.controller.js";

const authRoutes = Router();

// prefix: /api/auth
authRoutes.post("/register", registerHandler);
authRoutes.post("/login", loginHandler);
authRoutes.get("/refresh", refreshHandler);
authRoutes.get("/logout", logoutHandler);
authRoutes.get("/verify-email/:code", verifyEmailHandler);
authRoutes.post("/forgot-password", sendForgotPasswordHandler);
authRoutes.post("/reset-password", resetPasswordHandler);

export default authRoutes;
