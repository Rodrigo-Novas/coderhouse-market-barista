import React from "react";
import { Link } from "react-router-dom"
export const Item = ( {productos} ) => {

return(
        <div className="contenedor">
            <div className="card rounded" style={{ width: "18rem;" }}>
                <img className="card-img-top w-25 m-auto" src={productos.pictureURL} alt="productos" ></img>
                <div className="card-body text-center">
                    <p className="card-title bg-warning">{productos.title}</p>
                    <p className="card-text text-secondary">Price: {productos.price}</p>
                    <p className="card-text text-secondary">Cantity: {productos.cantidad}</p>
                    <p className="card-text text-secondary">Category: {productos.categoria}</p>
                </div>

                <Link to={`/items/${productos.id}`} className="btn btn-primary boton">Details</Link>
            </div>
        </div>
        
    )
}