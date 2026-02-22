import axios from "axios";
import { toast } from "sonner";

const API_URL = import.meta.env.VITE_BACKEND_URL;

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  timeout: 8000, // 8 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ECONNABORTED") {
      toast.error("Request timed out");
    } else if (!error.response) {
      toast.error("Network error. Check your connection.");
    }
    return Promise.reject(error);
  },
);

export default api;
