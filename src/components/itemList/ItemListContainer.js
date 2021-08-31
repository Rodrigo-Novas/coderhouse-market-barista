import React , { useState, useEffect, useContext } from "react";
import { Item } from "../item/item";
import { getFirestore } from "../firebase/firebase";
import { CartContext } from "../cart/cartContext";
export const ItemListContainer = (bestProduct) => {
    const product = bestProduct.product;
    const [listItems, setListItems] = useState([]) //inicializo el estado en vacio
    const { arrayCount } = useContext(CartContext)
    const db = getFirestore()
    const items = db.collection("item")
    //Defino promesa
    const getItems = () => {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(items)
        }, 2000
        )})
    }

    useEffect( () =>{
        getItems().then((resolve) =>
        items.get().then((query)=>
            setListItems(
            query.docs.map((doc, index) => {
            return {...doc.data(), id: index}})),[]))})

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
                <Link to={{pathname: "/categoriaCafe", state: { cart: productos}}} className="btn btn-primary boton">Cafe</Link>
                <Link to={{pathname: "/categoriaCafetera", state: { cart: productos}}} className="btn btn-primary boton">Cafetera</Link>
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


