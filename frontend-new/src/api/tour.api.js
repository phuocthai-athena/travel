import axiosClient from "./axiosClient";

const tourApi = {
  getAll: (params) => {
    return axiosClient.get("/tours", { params });
  },

  getById: (id) => {
    return axiosClient.get(`/tours/${id}`);
  },

  create: (data) => {
    return axiosClient.post("/tours", data);
  },

  update: (id, data) => {
    return axiosClient.put(`/tours/${id}`, data);
  },

  delete: (id) => {
    return axiosClient.delete(`/tours/${id}`);
  },
};

export default tourApi;
