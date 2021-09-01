import React, {useContext, useEffect, useState} from "react";
import {useHistory, useLocation} from "react-router-dom";
import { CartContext } from "../cart/cartContext";
import { Link } from "react-router-dom"
export const CategoryCafetera = () =>{

        const history = useHistory()
        const location = useLocation()
        const { cart } = location.state
        const handleBack = () => {
            history.push('/')
        }
        console.log(cart)
        console.log(cart.length)
        const cartFilter = cart.filter (carts=>carts.categoria == "cafetera")
        return (
            <div>
                {cart.length !== 0 ?
                <div>
                {cart.map((carts)=>(
                <div>
                    <div className="card rounded m-3" style={{ width: "18rem;" }}>
                        <img className="card-img-top w-25 m-auto" src={carts.pictureURL} alt="productos" ></img>
                        <div className="card-body text-center">
                            <p className="card-title bg-warning">{carts.title}</p>
                            <p className="card-text text-secondary">Price: {carts.price}</p>
                            <p className="card-text text-secondary">Cantity: {carts.cantidad}</p>
                            <p className="card-text text-secondary">Category: {carts.categoria}</p>
                        </div>
                        <Link to={`/items/${carts.id}`} className="btn btn-primary boton">Details</Link>
                    </div>
                    
                </div>
                ))}
                </div>:
                <div>
                <h1>There is no item in cart</h1>
                <button className="btn btn-outline-warning btn-dark" onClick = { () => handleBack() }>back</button>
                </div>
                }
            </div>

        )
    }