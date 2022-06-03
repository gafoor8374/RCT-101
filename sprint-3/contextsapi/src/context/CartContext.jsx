import React, { createContext, useState,useContext } from "react";
import { AuthContext } from "./AuthContext";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const {isAuth} =useContext(AuthContext)
  const [count, setCount] = useState(0);
  const addCart = () => {
    setCount(count + 1);
  };
  const buy = () => {
    // check if user is LoggedIN
    //if user is logged in then allow to pay and buy them
if(isAuth){
    console.log("can buy")
}
else{
    console.log("cannot buy without loggin")
}  
};
  return (
    <CartContext.Provider value={{ count, addCart, buy }}>
      {children}
    </CartContext.Provider>
  );
};
