import { createComments } from "../../utils/helpers/comments/createComment";

export const createCommentAction =
  (updateState, post_id) => async (previousState, formData) => {
    const dataPost = {
      text: formData.get("text"),
      post_id: post_id,
    };
    const apiResponse = await createComments(dataPost);
    updateState(apiResponse);
    return null;
  };
