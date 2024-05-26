import axios from "axios";
import { api_url } from "./config";
export const loginUser = async (userData) => {
  const { email, password } = userData;
  if (!email || !password) {
    return { error: true, data: "Faltan campos a completar." };
  }
  try {
    const apiResponse = await axios.post(`${api_url}/users/login`, userData);
    return { error: false, data: apiResponse.data };
  } catch (error) {
    return { error: true, data: error.response.data };
  }
};
