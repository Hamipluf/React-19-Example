import { createContext, useState, useCallback, useEffect } from "react";
import { currentUser as fetchCurrentUser } from "../utils/helpers/current";

export const UserContext = createContext({
  id: null,
  firstName: null,
  isLogged: false,
});

export const UserContextProvider = ({ children }) => {
  const [firstName, setFirstName] = useState(null);
  const [id, setId] = useState(null);
  const [isLogged, setIsLogged] = useState(false);

  const updateUser = useCallback(({ id, name, isLogged }) => {
    setFirstName(name), setIsLogged(isLogged), setId(id);
  }, []);

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const currentUser = await fetchCurrentUser();
        if (currentUser.data.success) {
          updateUser({
            id: currentUser.data.data.id,
            name: currentUser.data.data.first_name,
            isLogged: true,
          });
        } else {
          updateUser({ id: null, name: null, isLogged: false });
        }
      } catch (error) {
        console.error("Error fetching current user:", error.response.data);
        updateUser({ id: null, name: null, isLogged: false });
      }
    };
    getCurrentUser();
  }, [fetchCurrentUser, updateUser]);

  return (
    <UserContext value={{ id, firstName, isLogged, updateUser }}>
      {children}
    </UserContext>
  );
};
