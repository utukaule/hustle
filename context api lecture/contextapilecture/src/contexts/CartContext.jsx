import { useState } from 'react';
import { createContext } from 'react'

//creating context
export const CartContext = createContext();

//creating wrapper
export const CartContextProvider = ({ children }) => {
    const [cartCount, setCartCount] = useState(10);
    const handleCartUpdate = (value) => {
        setCartCount(cartCount + value);
    }
    return <CartContext.Provider value={{cartCount,handleCartUpdate}}>{ children }</CartContext.Provider>
}

