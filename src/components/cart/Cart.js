import React, {useContext, useEffect, useState} from "react";
import { CartContext } from "../cart/cartContext"
import {useHistory} from "react-router-dom";
export const Cart = () =>{

        const history = useHistory()
        const { cart, removeFromCart } = useContext(CartContext)
        const handleRemove = (carts) => {
            removeFromCart(carts)
        }
        const handleBack = () => {
            history.push('/')
        }
        return (
            <div>
                {cart.length !== 0 ?
                cart.map(carts => (
                <div className="card rounded m-3" style={{ width: "18rem;" }}>
                    <img className="card-img-top w-25 m-auto" src={carts.pictureURL} alt="productos" ></img>
                    <div className="card-body text-center">
                        <p className="card-title bg-warning">{carts.title}</p>
                        <p className="card-text text-secondary">{carts.price}</p>
                    </div>
                    <button className="btn btn-outline-warning btn-dark" onClick = { () => handleRemove(carts)}>DELETE</button>
                </div>)):
                <div>
                <h1>There is no item in cart</h1>
                <button className="btn btn-outline-warning btn-dark" onClick = { () => handleBack() }>back</button>
                </div>
                }
            </div>

        )
    }