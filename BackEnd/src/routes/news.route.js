import { Router } from "express";
import {
  createNews,
  deleteNews,
  getListNews,
  getNews,
  updateNews,
} from "../controllers/news.controller.js";

const newsRoutes = Router();

newsRoutes.post("/", createNews);
newsRoutes.patch("/:id", updateNews);
newsRoutes.delete("/:id", deleteNews);
newsRoutes.get("/", getListNews);
newsRoutes.get("/:id", getNews);

export default newsRoutes;
