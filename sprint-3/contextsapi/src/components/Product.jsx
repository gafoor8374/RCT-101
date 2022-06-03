import React,{useContext} from 'react';
import { AuthContext } from '../context/AuthContext';

export const Product = () => {
  const { isAuth } = useContext(AuthContext);
  
  return (
    <div>Product:
        {isAuth ? "LoggedIN" :"Logout"}
    </div>
  )
}
