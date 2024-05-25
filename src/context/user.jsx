import { createContext, useState, useCallback } from "react";


export const UserContext = createContext({ id: null, firstName: null, isLogged: false });

export const UserContextProvider = ({ children }) => {
  const [firstName, setFirstName] = useState(null);
  const [id, setId] = useState(null);
  const [isLogged, setIsLogged] = useState(false);

  const updateUser = useCallback(({ id, name, isLogged }) => {
    setFirstName(name), setIsLogged(isLogged), setId(id)
  }, []);

  return (
    <UserContext value={{ id, firstName, isLogged, updateUser }}>
      {children}
    </UserContext>
  );
};
