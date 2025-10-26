import catchErrors from "../utils/catch-errors.js";
import TourModel from "../models/tour.model.js";
import { NOT_FOUND, CREATED } from "../constants/http.js";
import { errorResponse, successResponse } from "../utils/response.js";

const TourMessages = {
  CREATE_SUCCESS: "Tour created successfully",
  UPDATE_SUCCESS: "Tour updated successfully",
  DELETE_SUCCESS: "Tour deleted successfully",
  GET_ALL_SUCCESS: "Tours retrieved successfully",
  GET_ONE_SUCCESS: "Tour retrieved successfully",
  NOT_FOUND: "Tour not found",
  ERROR: "Something went wrong",
};

export const createTour = catchErrors(async (req, res) => {
  const tour = await TourModel.create(req.body);
  return successResponse(res, tour, TourMessages.CREATE_SUCCESS, CREATED);
});

export const updateTour = catchErrors(async (req, res) => {
  const tour = await TourModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  // appAssert(false, NOT_FOUND, "Tour not found");
  // if (!tour) return res.status(NOT_FOUND).json({ message: "Tour not found" });
  if (!tour) return errorResponse(res, TourMessages.NOT_FOUND, NOT_FOUND);
  return successResponse(res, tour, TourMessages.UPDATE_SUCCESS);
});

export const deleteTour = catchErrors(async (req, res) => {
  const tour = await TourModel.findByIdAndDelete(req.params.id);
  if (!tour) return errorResponse(res, TourMessages.NOT_FOUND, NOT_FOUND);

  return successResponse(res, tour, TourMessages.DELETE_SUCCESS);
});

export const getTours = catchErrors(async (req, res) => {
  const tours = await TourModel.find();
  return successResponse(res, tours, TourMessages.GET_ALL_SUCCESS);
});

export const getTour = catchErrors(async (req, res) => {
  const tour = await TourModel.findById(req.params.id);
  if (!tour) return errorResponse(res, TourMessages.NOT_FOUND, NOT_FOUND);

  return successResponse(res, tour, TourMessages.GET_ONE_SUCCESS);
});
