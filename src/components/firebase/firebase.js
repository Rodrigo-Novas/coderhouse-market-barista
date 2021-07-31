import React from "react"
import firebase from "firebase/app"
import "firebase/firestore"

const app = firebase.initializeApp({
// Your web app's Firebase configuration
    apiKey: "AIzaSyBuuX1vuRxfjDYkLXl9A5DOE4Jd6o6hU6o",
    authDomain: "coderhouse-baristap.firebaseapp.com",
    projectId: "coderhouse-baristap",
    storageBucket: "coderhouse-baristap.appspot.com",
    messagingSenderId: "100871178361",
    appId: "1:100871178361:web:17fea5fa5978b68a332ca8"

})
// Initialize Firebase
export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app);
}
