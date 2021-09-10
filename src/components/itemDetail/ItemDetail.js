import React, {useState, useContext, useEffect} from "react"
import {useHistory} from "react-router-dom";
import { ItemCount } from "../itemCount/ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../cart/cartContext"


export const ItemDetail = ({items}) =>{
     console.log(items.pictureURL)
     const history = useHistory();
     const [isCount, setCount] = useState(false)
     const handleState = () => setCount(true)
     const [cantidad, setCantidad] = useState(0);
     const { addToCart, removeFromCart, clearCART, addcantFromCart } = useContext(CartContext)
    const handleSend = () => {
        console.log(cantidad)
        if (cantidad <= 0){
            console.log("cero")
            if (window.confirm("You cannot buy without add an item")) {
                history.go(0)
            }
            else{
                history.go(0)
            }
        }
        else{
            console.log("nada")
            addToCart({...items})
        }
    }

    const handleRemove = () => {
        removeFromCart(items)
        history.goBack()
    }
    const handleClear = () => {
        clearCART()
        history.goBack()
    }

    const handleCant = () => {
        setCantidad(cantidad <=0 ? cantidad : cantidad-1)
    }

    const handleCantMore = () =>{
        if (cantidad < items.cantidad){
            setCantidad(cantidad + 1)
        }
    }

    const handleAddCant = () =>{
            addcantFromCart(items, cantidad)
    }
    const handleAddProduct = (e) => {
        e.stopPropagation();

        addToCart({
            cantidad: cantidad,
            items,
        }, cantidad)
    }

    const handleBack = () => {
        history.push('/')
    }


     return(
        <div>
        {items.cantidad != 0 ?(  
        <div className="card rounded" style={{ width: "18rem;" }}>
                <img className="card-img-top w-25 m-auto" src={items.pictureURL} alt="producto" ></img>
                <div className="card-body text-center">
                    <p className="card-title bg-warning">{items.title}</p>
                    <p className="card-text text-secondary">Price: {items.price}</p>
                    <p className="card-text text-secondary">Cantity: {items.cantidad}</p>
                </div>
                {!isCount ? (
                    <>
                <div className="cantprod col-md-12 my-2 mx-4">
                    {/* <ItemCount isCount={isCount} setCount={setCount}/> */}
                <div className="less-more"> 
                    <button name="qty" value="1" className="count_less btn btn-outline-success" onClick={() =>{handleCant(); handleAddProduct()} }><strong>-</strong></button>
                    <button name="qty" value="1" className="count_more btn btn-outline-warning" onClick={() =>{handleCantMore();} }><strong>+</strong></button>
                    <br/>
                    <div className="item-cantity">You have {cantidad} products, enjoy!</div>  
                </div>
                </div>
                
                <button className="btn btn-outline-success" onClick = {() => {handleState(); handleSend();}}>BUY</button>
                <button className="btn btn-outline-warning" onClick = {() => {handleState(); handleClear();}}>CLEAR CART</button>
                </>):(
                    <>
                    <Link className="btn" to="/cart" onClick={handleState}>
                        <button className="btn btn-outline-success" onClick={ () => {handleState(); handleAddCant()}}>Finish</button>
                    </Link>
                    <button className="btn btn-outline-warning" onClick = {() => {handleState(); handleRemove();}}>Quit</button>
                    </>
                )
                }
        </div>
        ):(
            <div>
                <h1>This item has no stock :c sry</h1>
                <button className="btn btn-outline-warning btn-dark" onClick = { () => handleBack() }>back</button>
            </div>
        )
        }
        </div>
        
    )
}