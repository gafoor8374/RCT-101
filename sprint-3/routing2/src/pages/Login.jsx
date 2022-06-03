import React, { useState,useContext } from "react";
import { AuthContext } from "../context/AuthContext";
// import {useNavigate} from "react-router-dom"

export const Login = () => {
    // const navigate= useNavigate()
  const [loginCre, setLoginCre] = useState({});
  const{login} =useContext(AuthContext)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginCre({
      ...loginCre,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    //TODO:
    login()
    // navigate("/feeds")
  };
  return (
    <div>
      Login:
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "auto",
          maxWidth: "200px",
          gap: "10px",
        }}
      >
        <input
          onChange={handleChange}
          type="email"
          placeholder="Enter your email address"
        />
        <input
          onChange={handleChange}
          type="password"
          placeholder="Enter your password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
