import axios from "axios";
import { api_url } from "../../config";
export const registerUser = async (newUserData) => {
  try {
    const apiResponse = await axios.post(
      `${api_url}/users/create-user`,
      newUserData
    );
    apiResponse.data.success &&
    apiResponse.data.data.token &&
    localStorage.setItem("token", apiResponse.data.data.token);
    return { error: false, data: apiResponse.data };
  } catch (error) {
    return { error: true, data: error.response.data };
  }
};
