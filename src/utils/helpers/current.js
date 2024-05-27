import axios from "axios";
import { api_url } from "../config";
export const currentUser = async () => {
  const token = localStorage.getItem("token");
  try {
    const apiResponse = await axios.get(`${api_url}/users/current`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { data: apiResponse.data };
  } catch (error) {
    return { data: error.response.data };
  }
};
