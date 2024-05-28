import axios from "axios";
import { api_url } from "../../config";
export const deletePost = async (id) => {
  const token = localStorage.getItem("token");
  try {
    const apiResponse = await axios.delete(
      `${api_url}/posts/delete-post/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return apiResponse.status === 204
      ? { error: false, data: "Post eliminado" }
      : { error: true, data: "Error eliminando el post " };
  } catch (error) {
    return { data: error.response.data };
  }
};
