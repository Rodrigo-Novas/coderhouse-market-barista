import React, {createContext, useState} from "react";


export const CartContext = createContext();

export const CartContextProvider = ( { children } ) =>{
    const [cart, setCart] = useState([]);
    const [arrayCount, setArrayCount] = useState([]);
    const isntinCart = (receivedItem) => cart.filter(item=> item.id === receivedItem.id).length === 0;
    const addToCart = (receivedItem) => {
        if (isntinCart(receivedItem)){
            setCart([...cart, receivedItem])
        }
        else{
            alert("This item is in the cart, sry :(.")
        }
    }

    const checkItem = (receivedItem) => {
        if (isntinCart(receivedItem)){
            return receivedItem
        }
    }

    const removeFromCart = (receivedItem) => {
        let allItemsExceptRemoved = cart.filter(item => item.id !== receivedItem.id)
        setCart(allItemsExceptRemoved)
    }
    const clearCART = () => setCart([])

    return (
        <CartContext.Provider value={{addToCart, removeFromCart, clearCART, checkItem, cart, setArrayCount, arrayCount}}>
            {children}
        </CartContext.Provider>
    )

    }