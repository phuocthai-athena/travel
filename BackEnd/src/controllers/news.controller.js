import { NOT_FOUND } from "../constants/http.js";
import NewsModel from "../models/news.model.js";
import catchErrors from "../utils/catch-errors.js";
import { errorResponse, successResponse } from "../utils/response.js";

const NewsMessages = {
  CREATE_SUCCESS: "News created successfully",
  UPDATE_SUCCESS: "News updated successfully",
  DELETE_SUCCESS: "News deleted successfully",
  GET_ALL_SUCCESS: "News list fetched successfully",
  GET_ONE_SUCCESS: "News fetched successfully",
  NOT_FOUND: "News not found",
  ERROR: "Something went wrong",
};

export const createNews = catchErrors(async (req, res) => {
  const news = await NewsModel.create(req.body);
  return successResponse(res, news, NewsMessages.CREATE_SUCCESS);
});

export const updateNews = catchErrors(async (req, res) => {
  const news = await NewsModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!news) return errorResponse(res, NewsMessages.NOT_FOUND, NOT_FOUND);
  return successResponse(res, news, NewsMessages.UPDATE_SUCCESS);
});

export const deleteNews = catchErrors(async (req, res) => {
  const news = await NewsModel.findByIdAndDelete(req.params.id);

  if (!news) return errorResponse(res, NewsMessages.NOT_FOUND, NOT_FOUND);
  return successResponse(res, news, NewsMessages.DELETE_SUCCESS);
});

export const getListNews = catchErrors(async (req, res) => {
  const listNews = await NewsModel.find();
  return successResponse(res, listNews, NewsMessages.GET_ALL_SUCCESS);
});

export const getNews = catchErrors(async (req, res) => {
  const news = await NewsModel.findById(req.params.id);
  if (!news) return errorResponse(res, NewsMessages.NOT_FOUND, NOT_FOUND);
  return successResponse(res, news, NewsMessages.GET_ONE_SUCCESS);
});
