import { useActionState, useState, useEffect } from "react";
import { registerAction } from "../../actions/user/register";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const FormRegister = () => {
  const [response, setResponse] = useState(null);
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const registerNewUserAction = registerAction(setResponse);

  const [error, submitAction, isPending] = useActionState(
    registerNewUserAction
  );

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
    <form action={submitAction}>
      {/* FirstName y LastName */}
      <div className="flex gap-x-5">
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
          <input
            className="pl-2 outline-none bg-transparent border-none"
            type="text"
            name="first_name"
            id="first_name"
            placeholder="First Name"
          />
        </div>
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clipRule="evenodd"
            />
          </svg>
          <input
            className="pl-2 outline-none bg-transparent border-none"
            type="text"
            name="last_name"
            id="last_name"
            placeholder="Last Name"
          />
        </div>
      </div>
      {/* Email */}
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
          />
        </svg>
        <input
          className="pl-2 outline-none bg-transparent border-none w-full"
          type="text"
          name="email"
          id="email"
          placeholder="Email Address"
        />
      </div>
      {/* Show passord */}
      <div className="flex justify-end w-full">
        <label className="swap swap-rotate m-2">
          {/* this hidden checkbox controls the state */}
          <input onChange={() => setShowPass(!showPass)} type="checkbox" />

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
            className="icon icon-tabler icons-tabler-outline icon-tabler-eye swap-on "
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
            <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
          </svg>
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
            className="icon icon-tabler icons-tabler-outline icon-tabler-eye-off swap-off "
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
            <path d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87" />
            <path d="M3 3l18 18" />
          </svg>
        </label>
      </div>
      {/* Password */}
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl  mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
            clipRule="evenodd"
          />
        </svg>
        <input
          className="pl-2 outline-none border-none bg-transparent w-full"
          type={showPass ? "text" : "password"}
          name="password"
          id="password"
          placeholder="Password"
          autoComplete=""
        />
      </div>

      {/* Confirm Password */}
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
          />
        </svg>
        <input
          className="pl-2 outline-none border-none bg-transparent w-full"
          type={showPass ? "text" : "password"}
          name="confirm_password"
          id="confirm_password"
          placeholder="Confirm Password"
          autoComplete="off"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
      >
        Register
      </button>
      <Link
        to="/login"
        className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:underline "
      >
        Do you have an account ?
      </Link>
    </form>
  );
};
export default FormRegister;
