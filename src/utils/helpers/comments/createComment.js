import axios from "axios";
import { api_url } from "../../config";
export const createComments = async (dataComment) => {
  const token = localStorage.getItem("token");
  try {
    const apiResponse = await axios.post(
      `${api_url}/comments/create-comment`,
      dataComment,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return { data: apiResponse.data };
  } catch (error) {
    return { data: error.response.data };
  }
};
