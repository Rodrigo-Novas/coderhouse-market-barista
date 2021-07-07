import React from "react"

//item count
export const ItemCount = ({setCantidad, cantidad}) => {
    
    return(
    <div className="less-more"> 
        <button name="qty" value="1" className="count_less btn btn-outline-success" onClick={() => setCantidad(cantidad <=0 ? cantidad : cantidad-1)}><strong>-</strong></button>
        <button name="qty" value="1" className="count_more btn btn-outline-warning" onClick={() => setCantidad(cantidad + 1)}><strong>+</strong></button>
    </div>)
}