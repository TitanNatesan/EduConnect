import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userType, setUserType] = useState(null);
  const [userID, setUserID] = useState(null);


  const setUser = (type, id) => {
    setUserType(type);
    setUserID(id);
  };

  return (
    <UserContext.Provider value={{ userType, userID, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
