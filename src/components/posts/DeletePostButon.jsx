import React, { useTransition, use } from "react";
import { deletePost } from "../../utils/helpers/posts/deletePost";
import { toast } from "react-toastify";
import { PostContext } from "../../context/post";

const DeletePostButon = ({ id }) => {
  const [isPending, startTransition] = useTransition();
  const { updatePosts, posts } = use(PostContext);

  const handleDelete = () => {
    startTransition(async () => {
      const postDelted = await deletePost(id);
      const filteredPosts = posts.filter((post) => post.id !== id);
      if (postDelted.error) {
        return toast.error(postDelted.data);
      } else {
        updatePosts({ posts: filteredPosts });
        return toast.success(postDelted.data);
      }
    });
  };
  return (
    <button
      onClick={() => handleDelete()}
      class="btn btn-ghost btn-circle btn-sm"
    >
      {isPending ? (
        <span className="loading loading-ring loading-md"></span>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-trash"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 7l16 0" />
          <path d="M10 11l0 6" />
          <path d="M14 11l0 6" />
          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
        </svg>
      )}
    </button>
  );
};

export default DeletePostButon;
