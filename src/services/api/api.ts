import axios from "axios";

const api = axios.create({
  baseURL: `https://core.ac.uk/api-v2/`,
});

export default api;
