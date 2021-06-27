import React from "react";


export const ItemListContainer = (bestProduct) => {
    const product = bestProduct.product;
    return(
        <div className="row">
            <div className="col-6 m-auto my-3">
                <div className="list-group">
                    <li className="list-group-item bg-warning">Available products</li>
                    <li className="list-group-item">{product} &#11088; </li>
                    <li className="list-group-item">Cafetera Oster PrimaLatte</li>
                    <li className="list-group-item">Cafetera Magefesa</li>
                    <li className="list-group-item">Café Tostado En Grano Premium</li>
                    <li className="list-group-item">Café Gunes</li>
                </div>
            </div>
        </div>
    )
}


