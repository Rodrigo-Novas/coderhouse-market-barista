import React from "react" //use efect despues de renderizar se ejecuta
import { ItemListContainer } from "../itemList/itemListContainer";
import { ItemCount } from "../itemCount/itemCount";
export const Processes = () => {
    
    return(<div className="row">
        <div className="col-md-12 my-2 mx-4">
            <h1>Market</h1>
        </div>
        {/* aplicate prop greeting */}
        <ItemListContainer product="Coffee of salamanca"/>
        <div className="col-md-12 my-2 mx-4">
            <p>Coderhouse - in this place you will see the footer</p>
        </div>
    </div>)
}