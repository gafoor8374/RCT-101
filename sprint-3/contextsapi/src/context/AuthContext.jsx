import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const login = (username, password) => {
    if (username && password) {
      // call api to get access the token
      setIsAuth(true);
    }
  };
  const logout = () => {
    // call api to get infrom that session is over
    setIsAuth(false);
  };
  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
