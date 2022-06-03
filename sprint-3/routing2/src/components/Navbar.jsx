import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
  const { isAuth, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (isAuth) {
      logout();
      //   navigate("/");
    } else {
      //he want to login
      navigate("/login");
    }
  };

  return (
    <div style={{ padding: "10px", display: "flex", gap: "20px" }}>
      Navbar
      <Link to="/">Home</Link>
      <Link to="/feeds">Feeds</Link>
      <Link to="/careers">Careers</Link>
      <Link to="/posts">Posts</Link>
      <button onClick={handleLogin}>{isAuth ? "Logout" : "Login"}</button>
    </div>
  );
};
