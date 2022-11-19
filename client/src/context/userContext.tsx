import { createContext, useContext, useState } from "react";

interface ChildrenType {
  children: JSX.Element;
}

interface PropsUser {
  id_role: number;
  name_user: string;
}

interface UserContextType {
  user: PropsUser;
  getUser: (id: number, name: string) => void;
}

const defaultContext: UserContextType = {
  user: {
    id_role: 0,
    name_user: "",
  },
  getUser: (id: number, name: string) => {},
};

export const UserContext = createContext<UserContextType>(defaultContext);

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("this contexts must be used whitin a UserContextProvider");
  }
  return context;
};

export const UserContextProvider = ({ children }: ChildrenType) => {
  const [user, setUser] = useState({
    id_role: 0,
    name_user: "",
  });
  const getUser = (id_role: number, name_user: string) => {
    setUser({
      id_role,
      name_user,
    });
  };

  return (
    <UserContext.Provider value={{ user, getUser }}>
      {children}
    </UserContext.Provider>
  );
};
