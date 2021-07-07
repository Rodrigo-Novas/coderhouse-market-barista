import React, { useState } from "react" //use efect despues de renderizar se ejecuta
import { ItemListContainer } from "../itemList/ItemListContainer";
import { ItemCount } from "../itemCount/ItemCount";
export const Processes = () => {
    const [cantidad, setCantidad] = useState(0);
    return(<div className="row">
        <div className="col-md-12 my-2 mx-4">
            <h1>Market</h1>
        </div>
        {/* aplicate prop greeting */}
        <ItemListContainer product="Coffee of salamanca"/>
        <div className="col-md-12 my-2 mx-4">
            <p>Coderhouse - In this place we will see the cards with the products</p>
        </div>
        <div className="cantprod col-md-12 my-2 mx-4">
            <ItemCount cantidad={cantidad} setCantidad={setCantidad} />
            You have {cantidad} products, enjoy!
        </div>
    </div>)
}