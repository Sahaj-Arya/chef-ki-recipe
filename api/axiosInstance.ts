import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://your-api-url.com/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
