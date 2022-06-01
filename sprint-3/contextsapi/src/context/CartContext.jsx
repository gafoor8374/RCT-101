import React ,{createContext,useState} from 'react'

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [count,setCount]= useState(0)
    const addCart =()=>{
        setCount(count+1)
    }
    return <CartContext.Provider value={{count,addCart}}>{children}</CartContext.Provider>
}
