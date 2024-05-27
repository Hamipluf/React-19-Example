import { useActionState, useState, useEffect } from "react";
import { loginAction } from "../actions/user/login";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();
  const loginUserAction = loginAction(setResponse);

  const [error, submitAction, isPending] = useActionState(loginUserAction);
  useEffect(() => {
    if (response && response.data) {
      if (!response?.data.success) {
        toast.error(response.data.message);
      } else {
        navigate("/feed");
      }
    }
  }, [response]);

  return (
    <form action={submitAction} className="w-1/2 text-center">
      <input
        type="text"
        name="email"
        placeholder="Email"
        className="shadow-md border w-full h-10 px-3 py-2 text-primary focus:outline-none focus:border-primary mb-3 rounded"
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        className="shadow-md border w-full h-10 px-3 py-2 text-primary focus:outline-none focus:border-primary mb-3 rounded"
      />
      <button
        disabled={isPending}
        className="btn btn-secondary max-w-md w-full"
      >
        {isPending ? (
          <span className="loading loading-ring loading-lg"></span>
        ) : (
          "Sign In"
        )}
      </button>
    </form>
  );
};
export default FormLogin;
