import React, { useEffect, useState, useActionState, use } from "react";
import { createPostAction } from "../../actions/post/createPost";
import { toast } from "react-toastify";
import { PostContext } from "../../context/post";
const CreatePost = () => {
  const [response, setResponse] = useState(null);
  const postAction = createPostAction(setResponse);
  const [error, submitAction, isPending] = useActionState(postAction);
  const { updatePosts } = use(PostContext);

  useEffect(() => {
    if (response && response.data) {
      if (!response?.data.success) {
        toast.error(response.data.message);
      } else {
        updatePosts({
          posts: (prevState) => [...prevState, response?.data.data],
        });
        toast.success(response.data.message);
      }
    }
  }, [response]);

  return (
    <form
      className="flex flex-col justify-center w-8/12 bg-base-300 p-5 mx-20 rounded-md gap-y-5"
      action={submitAction}
    >
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Title" name="title" />
        <span className="badge badge-info">Optional</span>
      </label>
      <div className="flex items-center justify-center">
        <textarea
          placeholder="What are you thinking about?"
          className="textarea textarea-bordered textarea-sm w-full max-w-xl"
          name="content"
        ></textarea>
        <button
          disabled={isPending}
          className="btn btn-secondary w-2/12  btn-sm mx-10"
        >
          {isPending ? (
            <span className="loading loading-ring loading-md"></span>
          ) : (
            "Post"
          )}
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
