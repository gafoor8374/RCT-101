import React,{useContext} from 'react'
import {CartContext} from "../context/CartContext"

export const Cart = () => {
    const {addCart} = useContext(CartContext)
  return (
    <div>Cart
        <button onClick={addCart}>Add TO Cart</button>
    </div>
  )
}
