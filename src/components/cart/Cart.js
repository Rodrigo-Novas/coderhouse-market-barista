import React, {useContext, useEffect, useState} from "react";
import { CartContext } from "./cartContext"
import {useHistory} from "react-router-dom";
import { Link } from "react-router-dom"
import { Carts } from "./CartWidget";

export const Cart = () =>{

        const history = useHistory()
        var precioTotal = 0;
        var cantidadItem = 1;
        const { cart, removeFromCart } = useContext(CartContext)
        const handleRemove = (carts) => {
            removeFromCart(carts)
        }
        const handleBack = () => {
            history.push('/')
        }

        function totalPrice (){
            cart.map((carts) => (
                precioTotal = precioTotal + carts.price))
            return precioTotal.toPrecision()
        }

        
        function totalCantity (){
            cart.map((carts, index) => (
                cantidadItem = cantidadItem + index
                )
                )

            return cantidadItem
        }
        console.log(cart.length)
        return (
            <div>
                {cart.length !== 0 ?
                <div>
                {cart.map((carts) => (
                <div>
                    <div className="card rounded m-3" style={{ width: "18rem;" }}>
                        <img className="card-img-top w-25 m-auto" src={carts.pictureURL} alt="productos" ></img>
                        <div className="card-body text-center">
                            <p className="card-title bg-warning">{carts.title}</p>
                            <p className="card-text text-secondary">Price: {carts.price}</p>
                            <p className="card-text text-secondary">Category: {carts.categoria}</p>
                        </div>
                        <button className="btn btn-outline-warning btn-dark" onClick = { () => handleRemove(carts)}>DELETE</button>
                    </div>
                    
                </div>
                ))}
                <ul class="list-group">
                    <li class="list-group-item list-group-item-info">Total Price: {totalPrice()}</li>
                    <li class="list-group-item list-group-item-warning">Total Cantity: {totalCantity()}</li>
                </ul>
                <Link className="btn" to="/sold">
                        <button className="btn btn-outline-success">Finish purchase</button>
                </Link>
                </div>:
                <div>
                <h1>There is no item in cart</h1>
                <button className="btn btn-outline-warning btn-dark" onClick = { () => handleBack() }>back</button>
                </div>
                }
            </div>

        )
    }