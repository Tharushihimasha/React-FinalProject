import { createContext, useState } from "react";
import all_products from '../assets/all_products'

export const ShopContext = createContext(null);


const getDefaulCart = () =>{
    let cart = {};
    for (let index = 0; index < all_products.length + 1; index++){
        cart[index] = 0
    }
    return cart;
}

const ShopContextProvider = (props) => {
    
    const [cartItems, setCartItems] = useState(getDefaulCart());


    const addToCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}))
    }

    const removeToCart = (itemId) =>{
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
    }

    const contextValue = { all_products, cartItems, addToCart, removeToCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
   
}

export default ShopContextProvider;