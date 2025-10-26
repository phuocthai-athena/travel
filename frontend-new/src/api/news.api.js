import axiosClient from "./axiosClient";

const newsApi = {
  getAll: (params) => {
    return axiosClient.get("/news", { params });
  },

  getById: (id) => {
    return axiosClient.get(`/news/${id}`);
  },

  create: (data) => {
    return axiosClient.post("/news", data);
  },

  update: (id, data) => {
    return axiosClient.put(`/news/${id}`, data);
  },

  delete: (id) => {
    return axiosClient.delete(`/news/${id}`);
  },
};

export default newsApi;
