import { registerUser } from "../../utils/helpers/register";

export const registerAction =
  (updateState) => async (previousState, formData) => {
    const confirmPassword = formData.get("confirm_password");
    const newUser = {
      first_name: formData.get("first_name"),
      last_name: formData.get("last_name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    if (confirmPassword !== newUser.password) {
      updateState({
        data: { success: false, message: "Las contraseñas no coinciden" },
      });
      return null;
    } else {
      const response = await registerUser(newUser);
      updateState(response);
      return null;
    }
  };
