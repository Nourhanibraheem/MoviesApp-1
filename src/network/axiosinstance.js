import axios from "axios";
import store from './../store/store';
// import { setLoader } from './../store/actions/loader';

export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers["Authorization"] = localStorage.getItem("token") || "test";
    config["params"] = {
      "api-key": "d2sa154asd65dad2ad",
    };
    // store.dispatch(setLoader(true))
    // console.log(config);
    // return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // store.dispatch(setLoader(false))
    // return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
