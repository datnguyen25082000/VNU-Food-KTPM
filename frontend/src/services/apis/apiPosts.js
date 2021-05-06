import axios from "axios";
import { limit } from "../../constant/variable";

const baseUrl = "http://localhost:5000/posts/";
export const apiPosts = {
  getPosts: (params) => {
    const url =
      baseUrl + "?limit=" + limit + "&startIndex=" + params.startIndex;
    return axios.get(url);
  },

  getPost: (param) => {
    const url = baseUrl + param;
    return axios.get(url);
  },

  getImages: (param) => {
    const url = baseUrl + "img/" + param;
    return axios.get(url);
  },

  getComments: (param) => {
    const url = baseUrl + "getComment/" + param;
    return axios.get(url);
  },
};
