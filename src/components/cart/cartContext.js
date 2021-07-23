import React, {createContext, useState} from "react";


export const CartContext = createContext();

export const CartContextProvider = ( { children } ) =>{
    const [cart, setCart] = useState([]);
    const isntinCart = (receivedItem) => cart.Filter(item=> item.id === receivedItem.id).length === 0;

    const addToCart = (receivedItem) => {
        if (isntinCart(receivedItem)){
            setCart([...cart, receivedItem])
        }
        else{
            alert("This item is in the cart, sry :(")
        }
    }

    const removeFromCart = (receivedItem) => {
        let allItemsExceptRemoved = cart.filter(item => item.id !== receivedItem.id)
        setCart(allItemsExceptRemoved)
    }
    const clearCART = () => setCart([])

    return (
        <CartContext.Provider>
            {children}
            {addToCart}
        </CartContext.Provider>
    )

    }