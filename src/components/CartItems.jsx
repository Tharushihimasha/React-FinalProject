import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'

const CartItems = () => {

    const {all_products, cartItems, removeFromCart} = useContext(ShopContext);

  return (
    <div>
      
    </div>
  )
}

export default CartItems
