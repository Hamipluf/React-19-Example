import { loginUser } from "../../utils/helpers/users/login";

export const loginAction = (updateState) => async (previousState, formData) => {
  const datalogin = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const apiResponse = await loginUser(datalogin);


  updateState(apiResponse);
  return null;
};
