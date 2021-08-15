import React, {useContext, useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import { CartContext } from "../cart/cartContext";
export const Category = () =>{

        const history = useHistory()
        const { cart } = useContext(CartContext)
        var categorias = []
        const handleBack = () => {
            history.push('/')
        }
        
        const category = (categoria) =>{
            categorias = cart.filter(item => item.categoria == categoria)
            console.log(categorias)
            return categorias
        }
        // const category_cafetera = () =>{
        //     categorias = cart.filter(item => item.categoria == "cafetera")
        //     console.log(categorias)
        //     return categorias
        // }
        return (
            <div>
                {cart.length !== 0 ?
                <div>
                    <button type="button" class="btn btn-secondary" onClick={category("cafe")}>Coffe</button> {/* ver como es que puedo hacer la funcion turnando la categoria  */}
                    <button type="button" class="btn btn-secondary" onClick={category("cafetera")}>Coffe pop</button>
                {categorias.map(carts=>(
                <div>
                    <div className="card rounded m-3" style={{ width: "18rem;" }}>
                        <img className="card-img-top w-25 m-auto" src={carts.pictureURL} alt="productos" ></img>
                        <div className="card-body text-center">
                            <p className="card-title bg-warning">{carts.title}</p>
                            <p className="card-text text-secondary">{carts.price}</p>
                        </div>
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