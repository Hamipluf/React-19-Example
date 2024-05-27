import axios from "axios";
import { api_url } from "../../config";
export const loginUser = async (userData) => {
  try {
    const apiResponse = await axios.post(`${api_url}/users/login`, userData);
    return { data: apiResponse.data };
  } catch (error) {
    return { data: error.response.data };
  }
};
