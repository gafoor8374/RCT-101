import React from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const RequireAuth = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  const location = useLocation();
  console.log(location.pathname,location);
  if (isAuth) {
    return children;
  } else {
    return <Navigate to="/login"
    //  state={{ from: location }} replace
      />;
  }
};
