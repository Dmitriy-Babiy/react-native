import axios from "axios";
import { API_KEY, BACKEND_URL } from "@env";

export const agent = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
  params: {
    key: API_KEY,
  },
});
