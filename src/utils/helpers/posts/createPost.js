import axios from "axios";
import { api_url } from "../../config";
export const createPost = async (dataPost) => {
  const token = localStorage.getItem("token");
  try {
    const apiResponse = await axios.post(
      `${api_url}/posts/create-post`,
      dataPost,
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
