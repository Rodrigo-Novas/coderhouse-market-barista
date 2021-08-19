import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { ItemDetail } from "./ItemDetail";
import logo from '../../../../baristapp/src/assets/loading.gif'
import { getFirestore } from "../firebase/firebase";
//forma simplificada funcion flecha
export const ItemDetailContainer = () =>
{
    
    const [itemDetailState, setItemDetail] = useState([])
    const db = getFirestore()
    const items = db.collection("item")


    const { id: idParams} = useParams()

    //Creo la promesa
    const getItems = () =>
    {
        return new Promise((resolve) => {
            setTimeout(()=>{
                resolve(itemDetailState.find((item) => item.id.toString() === idParams))
            },2000
            )
        })
    }

    //ejecuto la promesa junto con el useEffect para poder realizar un efecto secundario luego de que se renderice cada vez que cambia el id params se ejecuta la promesa
    // useEffect( () =>{
    //     setItemDetail() //LO REINICIO
    //     getItems() //EJECUTO LA PROMESA
    //         .then((result) => 
    //             setItemDetail(result)
    //         )
    //     }
    // ,
    //     [idParams]
    // )
    //USO EL USEEFFECT PARA PODER EJECUTAR LA CONSULTA
    useEffect( () =>{
        setItemDetail() //LO REINICIO
        getItems() //EJECUTO LA PROMESA
        .then((result) => 
        items.get().then((query) => setItemDetail({...query.docs[idParams].data(), id: query.docs[idParams].id})))
        },
        [idParams]
        )

    // const itemsFilter = itemsDetailJson.filter(items => items.id.toString() === idParams)
    // console.log(itemsFilter)
    // console.log(itemDetailState)
    return (
        <div className="item-list">
        <div className="row">
        <div className="col-12 col-md-6 col-sm-12 m-auto my-3">
           {!itemDetailState ? <img src={logo} alt="loading..." />:<ItemDetail items={itemDetailState}></ItemDetail>}
        </div>
        </div>
        </div>
    )



}