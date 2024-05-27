import { loginUser } from "../../utils/helpers/login";

export const loginAction = (updateState) => async (previousState, formData) => {
  const datalogin = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const apiResponse = await loginUser(datalogin);
  apiResponse.data.success &&
    apiResponse.data.data.token &&
    localStorage.setItem("token", apiResponse.data.data.token);

  updateState(apiResponse);
  return null;
};
