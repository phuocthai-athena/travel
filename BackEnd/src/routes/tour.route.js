import { Router } from "express";
import {
  createTour,
  deleteTour,
  getTours,
  getTour,
  updateTour,
} from "../controllers/tour.controller.js";

const tourRoutes = Router();

tourRoutes.post("/", createTour);
tourRoutes.patch("/:id", updateTour);
tourRoutes.delete("/:id", deleteTour);
tourRoutes.get("/", getTours);
tourRoutes.get("/:id", getTour);

export default tourRoutes;
