import React , { useState } from "react";
import { Item } from "../item/item";

export const ItemListContainer = (bestProduct) => {
    const product = bestProduct.product;
    const [listItems, setListItems] = useState([]) //inicializo el estado en vacio
    const items = [
        {
           id:1,
           title:"Cafetera Oster PrimaLatte",
           price:39.6,
           pictureURL:"./img/cafetera_oster.jpg"
        },

        {
            id:2,
            title:"Cafetera Magefesa",
            price:40.6,
            pictureURL:"./img/Cafetera Magefesa.jpg"
         },
         {
            id:3,
            title:"Café Tostado En Grano Premium",
            price:50.6,
            pictureURL:"./img/Café Tostado En Grano Premium.jpg"
         },
         {
            id:4,
            title:"Café Gunes",
            price:20.6,
            pictureURL:"./img/Café Gunes.jpg"
         }
   
   
    ]

    //Defino promesa
    const getItems = () => {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(items)
        }, 2000
        )})
    }
    //Ejecuto la promesa
    getItems()
        .then((resolve) => setListItems(resolve)) //cambia el estado a resolve
        .catch((reject) => console.log(reject))


    return(
        <div className="item-list">
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
            <div className="row">

                    {listItems.map(productos => (
                        <div className="col-12 col-md-6 col-sm-12 m-auto my-3">
                            <Item productos={productos} key={productos.id}></Item>
                        </div>
                    ))}
            </div>
        </div>
    )
}


