import { message } from "antd";
import axiosClient from "./axiosClient";

class ApiAccount {
  getAll = (params) => {
    const url = "/users";
    return axiosClient.get(url, { params });
  };
  checkEmail = (email) => {
    const url = `/checkemail/${email}`;
    return axiosClient.get(url).then((data) => {
      return data.data;
    });
  };
  getOne = (params) => {
    const url = `/users/${params}`;
    return axiosClient.get(url).then((data) => {
      return data.data;
    });
  };
  getOneAdmin = (params) => {
    const url = `/userroles/${params}`;
    return axiosClient.get(url).then((data) => {
      return data.data;
    });
  };
  postUser = (params) => {
    const url = "/users";
    return axiosClient
      .post(url, params)
      .then((data) => {
        message.success("Account created successfully!");
      })
      .catch((err) => {
        message.error("An error occurred!");
      });
  };
  deleteUser = (id) => {
    const url = `/users/${id}`;
    return axiosClient
      .delete(url)
      .then((data) => {
        message.success("Deleted successfully!");
      })
      .catch((err) => {
        message.error("An error occurred!");
      });
  };
  editUser = (params) => {
    const url = `/users/${params.idsua}`;
    console.log(params, url);
    return axiosClient
      .patch(url, params)
      .then((data) => {
        return data.data;
      })
      .catch((err) => {
        message.error("An error occurred!");
      });
  };
}
const apiAccount = new ApiAccount();
export default apiAccount;
