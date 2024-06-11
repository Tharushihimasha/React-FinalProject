import { createContext } from "react";
import all_products from '../assets/all_products'

export const ShopContext = creteContext(null);

const ShopContextProvider =(props) =>{
    const contextValue = {all_products}
}