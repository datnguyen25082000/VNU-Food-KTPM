import axios from "axios";

const baseUrl = "http://localhost:5000/users/";
export const apiCurrentUser = {
  getPosts: () => {
    const url = baseUrl;
    return axios.get(url);
  },
};
