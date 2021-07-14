import React from "react"
import { ItemCount } from "../itemCount/ItemCount"

export const ItemDetail = ({items}) =>{
     console.log(items.pictureURL)
    return(

        <div className="card rounded" style={{ width: "18rem;" }}>
                <img className="card-img-top w-25 m-auto" src={items.pictureURL} alt="producto" ></img>
                <div className="card-body text-center">
                    <p className="card-title bg-warning">{items.title}</p>
                    <p className="card-text text-secondary">{items.price}</p>
                </div>
                <div className="cantprod col-md-12 my-2 mx-4">
                    <ItemCount/>
                </div>
        </div>
    )
}