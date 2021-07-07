import React from "react";

export const Item = ( {productos} ) => {

return(
        <div className="card rounded" style={{ width: "18rem;" }}>
            <img className="card-img-top w-25 m-auto" src={productos.pictureURL} alt="productos" ></img>
            <div className="card-body">
                <p className="card-title bg-warning">{productos.title}</p>
                <p className="card-text text-secondary">{productos.price}</p>
            </div>
        </div>
    )
}