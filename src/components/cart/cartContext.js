import React, {createContext, useState} from "react";
import firebase from "firebase/app"; import 'firebase/auth';
import { getFirestore } from "../firebase/firebase";
export const CartContext = createContext();

export const CartContextProvider = ( { children } ) =>{
    const [cart, setCart] = useState([]);
    const [arrayCount, setArrayCount] = useState([]);
	const [userName, setUserName] = useState("");
    const db = getFirestore();
    
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
    
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    //firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
    //const googleProvider = new firebase.auth.GoogleAuthProvider();

	const autenticacion = async () => {
		const google = await firebase.auth().signInWithPopup(googleAuthProvider);
		//console.log(google.user.displayName)
        setUserName(google.user.displayName);
	};

    return (
        <CartContext.Provider value={{addToCart, removeFromCart, clearCART, checkItem, cart, setArrayCount, arrayCount, autenticacion, userName}}>
            {children}
        </CartContext.Provider>
    )

    }