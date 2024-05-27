import axios from "axios";
import { api_url } from "../../config";
export const createPost = async () => {
  const token = localStorage.getItem("token");
  try {
    const apiResponse = await axios.post(`${api_url}/posts/create-post`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return { data: apiResponse.data };
  } catch (error) {
    return { data: error.response.data };
  }
};
