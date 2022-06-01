import React from 'react'
import { Cart } from './Cart'
import { Product } from './Product'
import { Products } from './Products'

export const Body = () => {
  return (
    <div>Body
        <Products />
        <Product />
        <Cart />
    </div>
  )
}
