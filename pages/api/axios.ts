import Axios from "axios";

export const axios = Axios.create({
  baseURL: "https://api.tvmaze.com",
});

axios.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
