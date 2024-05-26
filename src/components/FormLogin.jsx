import { useAcitionState, useState } from "react";
import { loginUser } from "../utils/login";

const loginAction = async (previosState, formData) => {
  const datalogin = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const login = await loginUser(datalogin);
  console.log(login);
  return null
};

const FormLogin = () => {
  const [error, submitAction, isPending] = useAcitionState(loginAction);
  console.log(error, submitAction, isPending);

  return (
    <form className="w-1/2 text-center">
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
      <button className="btn btn-secondary max-w-md w-full">Sign In</button>
    </form>
  );
};
export default FormLogin;
