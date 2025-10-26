import axiosClient from "./axiosClient";

const authApi = {
  login: (data) => {
    return axiosClient.post("/api/auth/login", data);
  },

  register: (data) => {
    return axiosClient.post("/api/auth/register", data);
  },

  logout: () => {
    return axiosClient.post("/api/auth/logout");
  },

  getProfile: () => {
    return axiosClient.get("/api/user");
  },

  refreshToken: (refreshToken) => {
    return axiosClient.post("/api/auth/refresh", { refreshToken });
  },
};

export default authApi;
