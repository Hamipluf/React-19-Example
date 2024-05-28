import axios from "axios";
import { api_url } from "../../config";
export const getFeed = async () => {
  try {
    const apiResponse = await axios.get(`${api_url}/posts`);
    return { data: apiResponse.data };
  } catch (error) {
    return { data: error.response.data };
  }
};
