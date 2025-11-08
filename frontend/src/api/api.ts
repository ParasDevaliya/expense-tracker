import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:4000/api", // adjust if backend host differs
  headers: {
    "Content-Type": "application/json"
  }
});

// Attach token if stored
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
