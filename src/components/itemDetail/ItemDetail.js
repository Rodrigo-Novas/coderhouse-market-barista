import React, {useState, useContext} from "react"
import { ItemCount } from "../itemCount/ItemCount"
import { Link } from "react-router-dom"
import { CartContext } from "../cart/cartContext"
export const ItemDetail = ({items}) =>{
     console.log(items.pictureURL)
     const [isCount, setCount] = useState(false)
     const handleState = () => setCount(true)
     const { addToCart, removeFromCart } = useContext(CartContext)
    const handleSend = () => {
        addToCart(...items)
    }
    const handleRemove = () => {
        removeFromCart(items)
    }
     return(

        <div className="card rounded" style={{ width: "18rem;" }}>
                <img className="card-img-top w-25 m-auto" src={items.pictureURL} alt="producto" ></img>
                <div className="card-body text-center">
                    <p className="card-title bg-warning">{items.title}</p>
                    <p className="card-text text-secondary">{items.price}</p>
                </div>
                {!isCount ? (
                    <>
                <div className="cantprod col-md-12 my-2 mx-4">
                    <ItemCount isCount={isCount} setCount={setCount}/>
                </div>
                <button className="btn btn-outline-success" onClick = {() => {handleState(); handleSend();}}>BUY</button>
                </>):(
                    <>
                    <Link to="/cart" onClick={handleState}>
                        <button onClick={handleState}>Finish</button>
                    </Link>
                    <button className="btn btn-outline-success" onClick = {() => {handleState(); handleRemove();}}>MODIFY</button>
                    </>
                )
                }
        </div>
    )
}