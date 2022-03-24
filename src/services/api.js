import axios from "axios";

export default () => {
  axios.defaults.baseURL = process.env.VUE_APP_API_URL;
  return axios;
};
