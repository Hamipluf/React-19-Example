import { createPost } from "../../utils/helpers/posts/createPost";

export const createPostAction =
  (updateState) => async (previousState, formData) => {
    const dataPost = {
      title: formData.get("title"),
      content: formData.get("content"),
    };
    const apiResponse = await createPost(dataPost);
    updateState(apiResponse);
    return null;
  };
