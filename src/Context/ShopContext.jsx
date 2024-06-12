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
    
    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for (const item in cartItems) {
            if(cartItems[item] >0){
                let itemInfo = all_products.find((product)=> product.id === Number
                (Item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
            
        }
    }
    const contextValue = { all_products, cartItems, addToCart, removeToCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
   
}

export default ShopContextProvider;