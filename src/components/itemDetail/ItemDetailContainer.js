import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { ItemDetail } from "./ItemDetail";
import logo from '../../../../baristapp/src/assets/loading.gif'

//forma simplificada funcion flecha
export const ItemDetailContainer = () =>
{
    const [itemDetailState, setItemDetail] = useState([])
    const itemsDetailJson = [
        {
            id:1,
            title:"Cafetera Oster PrimaLatte",
            price:39.6,
            pictureURL:"https://via.placeholder.com/150/"
        },

        {
            id:2,
            title:"Cafetera Magefesa",
            price:40.6,
            pictureURL:"https://via.placeholder.com/150/"
         },

         {
            id:3,
            title:"Café Tostado En Grano Premium",
            price:50.6,
            pictureURL:"https://via.placeholder.com/150/"
         },
         {
            id:4,
            title:"Café Gunes",
            price:20.6,
            pictureURL:"https://via.placeholder.com/150/"
         }
    ]

    const { id: idParams} = useParams()
    //Creo la promesa
    const getItems = () =>
    {
        return new Promise((resolve) => {
            setTimeout(()=>{
                resolve(itemsDetailJson.find((item) => item.id.toString() === idParams))
            },2000
            )
        })
    }

    //ejecuto la promesa junto con el useEffect para poder realizar un efecto secundario luego de que se renderice cada vez que cambia el id params se ejecuta la promesa
    useEffect( () =>{
        setItemDetail() //LO REINICIO
        getItems() //EJECUTO LA PROMESA
            .then((result) => 
                setItemDetail(result)
            )
        }
    ,
        [idParams]
    )

    const itemsFilter = itemsDetailJson.filter(items => items.id.toString() === idParams)
    // console.log(itemsFilter)
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