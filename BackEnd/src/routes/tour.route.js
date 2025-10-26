import { Router } from "express";
import {
  createTourHandler,
  deleteTourHandle,
  getAllToursHandle,
  getTourHandle,
  updateTourHandle,
} from "../controllers/tour.controller.js";

const tourRoutes = Router();

tourRoutes.post("/", createTourHandler);
tourRoutes.patch("/:id", updateTourHandle);
tourRoutes.delete("/:id", deleteTourHandle);
tourRoutes.get("/", getAllToursHandle);
tourRoutes.get("/:id", getTourHandle);

export default tourRoutes;
