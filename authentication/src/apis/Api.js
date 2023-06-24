import axios from "axios";

export const apiIntance = axios.create({
  baseURL: "http://localhost:5000/api/",
});
