import axios from "axios";
import { api_url } from "../../config";
export const getCommentOfPost = async (id) => {
  try {
    const apiResponse = await axios.get(`${api_url}/comments/post/${id}`);
    return apiResponse.status === 204
      ? { error: false, data: [] }
      : { error: false, data: apiResponse.data };
  } catch (error) {
    return { data: error.response.data };
  }
};
