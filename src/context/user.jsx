import { createContext, useState, useCallback } from "react";

const user = {
  id: null,
  first_name: null,
  last_name: null,
  full_name: () => first_name + last_name,
};

export const UserContext = createContext({ user, isLogger: false });

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);

  const updateUser = useCallback(({ user, isLogged }) => {
    setUser(user), setIsLogged(isLogged);
  }, []);

  return (
    <UserContextProvider value={(user, isLogged, updateUser)}>
      {children}
    </UserContextProvider>
  );
};
