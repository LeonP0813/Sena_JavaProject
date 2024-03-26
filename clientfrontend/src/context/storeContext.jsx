import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../components/products'

export const StoreContext = createContext(null); 

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0
    }
    return cart;
};

export const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId] + 1} ));
    };    
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId] - 1} ));
    };

    const contextValue = {cartItems, addToCart, removeFromCart};


  return <StoreContext.Provider value={contextValue}> {props.children} </StoreContext.Provider>
}
