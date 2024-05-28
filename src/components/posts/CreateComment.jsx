import React, {
  useEffect,
  useState,
  useTransition,
  useActionState,
} from "react";
import { getCommentOfPost } from "../../utils/helpers/posts/getCommentsOfPost";
import { toast } from "react-toastify";
import { createCommentAction as commentAction } from "../../actions/comment/createComment";
const CreateComment = ({ id }) => {
  const [isPending, startTransition] = useTransition();
  const [show, setShow] = useState(false);
  const [comments, setComments] = useState([]);
  const [result, setResult] = useState(null);
  const [commentCount, setCommentCount] = useState(0);
  const createCommentAction = commentAction(setResult, id);
  const [error, submitAction, isPendingState] =
    useActionState(createCommentAction);
  useEffect(() => {
    startTransition(async () => {
      const comment = await getCommentOfPost(id);
      if (comment.error) {
        toast.error("Error obteniendo los comentrarios");
      } else {
        setComments(comment.data);
        setCommentCount(comment.data.length);
      }
    });
    if (!result.data.success) {
      toast.error(result.data.message);
    } else {
      setComments((prevState) => [...prevState, result.data.data]);
      setCommentCount((count) => count + 1);
      toast.success(result.data.message);
    }
  }, [id, result]);

  const handleComment = () => {
    setShow(!show);
  };
  return (
    <>
      {show ? (
        <form action={submitAction} class="flex gap-x-2">
          <div className="flex justify-center items-center border px-3 rounded-2xl ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-1.5 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokelinecap="round"
                strokelinejoin="round"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <input
              class="pl-2 outline-none bg-transparent border-none text-primary"
              type="text"
              name="text"
              id="text"
              placeholder="Add comment"
            />
          </div>

          <div className="flex flex-col justify-center items-center gap-y-2">
            <button type="button" onClick={() => setShow(!show)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-circle-x text-error hover:opacity-70"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M10 10l4 4m0 -4l-4 4" />
              </svg>
            </button>
            <button type="submit">
              {isPendingState ? (
                <span className="loading loading-ring loading-md"></span>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-circle-check text-success hover:opacity-70"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                  <path d="M9 12l2 2l4 -4" />
                </svg>
              )}
            </button>
          </div>
        </form>
      ) : (
        <div className="">
          <button
            disabled={isPending}
            onClick={() => handleComment()}
            className="btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-1.5 h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
              />
            </svg>
            <span>{commentCount}</span>
          </button>

          {commentCount > 0 && (
            <div className="bg-white">
              {comments.map((comment) => {
                <p key={comment.id}>{comment.text}</p>;
              })}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default CreateComment;
