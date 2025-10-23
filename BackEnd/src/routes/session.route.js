import { Router } from "express";
import {
  deleteSessionHandler,
  getSessionsHandler,
} from "../controllers/session.controller.js";

const sessionsRoutes = Router();

// prefix: /api/sessions
sessionsRoutes.get("/", getSessionsHandler);
sessionsRoutes.delete("/:id", deleteSessionHandler);

export default sessionsRoutes;
