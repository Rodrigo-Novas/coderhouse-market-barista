import React, {useState} from "react"

//item count
export const ItemCount = () => {
    const [cantidad, setCantidad] = useState(0);
    return(
    <div className="less-more"> 
        <button name="qty" value="1" className="count_less btn btn-outline-success" onClick={() => setCantidad(cantidad <=0 ? cantidad : cantidad-1)}><strong>-</strong></button>
        <button name="qty" value="1" className="count_more btn btn-outline-warning" onClick={() => setCantidad(cantidad + 1)}><strong>+</strong></button>
        <br/>
        <div className="item-cantity">You have {cantidad} products, enjoy!</div>
    </div>)
}