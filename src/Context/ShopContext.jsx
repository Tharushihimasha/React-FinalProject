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
    
    const [cartItems, setcartItems] = useState(getDefaulCart());
    const contextValue = { all_products, cartItems };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
   
}

export default ShopContextProvider;