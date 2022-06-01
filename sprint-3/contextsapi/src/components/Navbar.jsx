import React, { useContext } from "react";
import { Wishlist } from "./Wishlist";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

export const Navbar = () => {
  const { isAuth, login, logout } = useContext(AuthContext);
  const {theme,isLight,toggleTheme} = useContext(ThemeContext)
  return (
    <div>
      Navbar
      <button
        onClick={() => {
          if (isAuth) {
            logout();
          }
           else {
            login("r","g");
          }
        }}
      >
        {isAuth ? "Logout" : "login"}
      </button>
      <button onClick={()=>{
        if(isLight==="light"){
            toggleTheme("dark")
        }
      }}>Toogle</button>
      <Wishlist />
    </div>
  );
};
