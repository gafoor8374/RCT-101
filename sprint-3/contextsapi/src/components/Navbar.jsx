import React, { useContext } from "react";
import { Wishlist } from "./Wishlist";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext";

export const Navbar = () => {
  const { isAuth, login, logout } = useContext(AuthContext);
  const { buy } = useContext(CartContext);
  const {isLight,toggleTheme} = useContext(ThemeContext)
  return (
    <div>
      Navbar
      <button
        onClick={() => {
          if (isAuth) {
            logout();
          } else {
            login("r", "g");
          }
        }}
      >
        {isAuth ? "Logout" : "login"}
      </button>
      <button onClick={buy}>Buy</button>
      <button onClick={toggleTheme}>{`MAKE ${isLight ? "dark" : "light"}`}</button>
      <Wishlist />
    </div>
  );
};
