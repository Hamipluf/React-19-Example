import { createContext, useState, useCallback, useEffect } from "react";
import { currentUser as fetchCurrentUser } from "../utils/helpers/users/current";
import { useLocation } from "react-router-dom";
export const UserContext = createContext({
  id: null,
  firstName: null,
  isLogged: false,
});

export const UserContextProvider = ({ children }) => {
  const [firstName, setFirstName] = useState(null);
  const [id, setId] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  const location = window.location.pathname;
  const updateUser = useCallback(({ id, name, isLogged }) => {
    setFirstName(name), setIsLogged(isLogged), setId(id);
  }, []);

  const getCurrentUser = useCallback(async () => {
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
  });

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser, location]);

  return (
    <UserContext value={{ id, firstName, isLogged, updateUser }}>
      {children}
    </UserContext>
  );
};
