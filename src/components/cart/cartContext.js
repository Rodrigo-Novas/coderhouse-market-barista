import React, {createContext, useState} from "react";
import firebase from "firebase/app"; import 'firebase/auth';
import { getFirestore } from "../firebase/firebase";
export const CartContext = createContext();

export const CartContextProvider = ( { children } ) =>{
    const [cart, setCart] = useState([]);
    const [arrayCount, setArrayCount] = useState(0);
	const [userName, setUserName] = useState("");
    const [totalQty, setTotalQty] = useState(0);
    const db = getFirestore();
    const itemCollection = db.collection("item");

    const isntinCart = (receivedItem) => cart.filter(item=> item.id === receivedItem.id).length === 0;
    const addToCart = (receivedItem, qty) => {
        if (isntinCart(receivedItem)){
            setCart([...cart, receivedItem])
            setTotalQty(totalQty + qty);
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

    const addcantFromCart = async (receivedItem, cantity) => {
        let itemsUpdate = db.collection("item").where(
			firebase.firestore.FieldPath.documentId(),
			"in",
			cart.map((items) => items.id)
		);
        const query = await itemsUpdate .get();
        const batch = db.batch();
        query.docs.forEach((docSnapshot, idx) => {
            batch.update(docSnapshot.ref, {
                comprados: cantity,
            });
        });
        batch.commit();
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
        <CartContext.Provider value={{addToCart, removeFromCart, clearCART, checkItem, cart, setArrayCount, arrayCount, autenticacion, userName,totalQty, addcantFromCart}}>
            {children}
        </CartContext.Provider>
    )

    }