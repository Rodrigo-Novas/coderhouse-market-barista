import React, { useState, useContext } from "react";
import { getFirestore } from "../firebase/firebase";
import firebase from "firebase/app";
//import "firebase/firebase";
import { CartContext } from "../cart/CartContext"
import styled from "styled-components";
import {FormSold} from "./formSold"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const DivCheckout = styled.div`
	font-family: "Source Sans Pro", sans-serif;
`;
const DivOrden = styled.div`
	margin-top: 15%;
`;

export const ItemSold = () => {
	const { userName } = useContext(CartContext)
	const [nombre, setNombre] = useState("");
	const [telefono, setTelefono] = useState("");
	const [email, setEmail] = useState("");
	const { cart, clearCART } = useContext(CartContext)
	const [orderId, setOrderId] = useState();

	const handleSell = (e) => {
		e.preventDefault();
		const datosCompra = {
			buyer: {
				name: nombre,
				phone: telefono,
				email: email,
			},
			date: firebase.firestore.FieldValue.serverTimestamp(),
			items: cart
		};

		const db = getFirestore();

		const OrderCollection = db.collection("orders");

		const ordenes = async () => {
			try {
				const pregunta = await OrderCollection.add(datosCompra);
				const respuesta = pregunta.id;
				clearCART();
				setOrderId(respuesta);
			} catch (error) {
				console.log(error);
			}
		};

		ordenes();

		const itemsUpdate = db.collection("item").where(
			firebase.firestore.FieldPath.documentId(),
			"in",
			cart.map((items) => items.id)
		);

		const updateStock = async () => {
			const query = await itemsUpdate.get();
			const batch = db.batch();
			query.docs.forEach((docSnapshot, idx) => {
				batch.update(docSnapshot.ref, {
					cantidad: Number(cart[idx].cantidad) - docSnapshot.data().comprados,
				});
			});
			batch.commit();
		};

		updateStock();
	};

	return (
		<DivCheckout className="container">
			<div className="row">
				{userName ? (
					orderId ? (
						<>
							<DivOrden className="text-center">
								<h3 className="fs-1">✅Compra realizada con exito!✅</h3>
								<p className="fs-4">
									Tu numero de orden es: <strong>{orderId}</strong>{" "}
								</p>
								<p className="fs-4">En la brevedad te vamos a contactar 😄</p>
							</DivOrden>
						</>
					) : (
						<>
							<FormSold
								handleSell={handleSell}
								setNombre={setNombre}
								setTelefono={setTelefono}
								setEmail={setEmail}
								nombre={nombre}
								telefono={telefono}
								email={email}
							/>
						</>
					)
				) : (
					<DivOrden className="text-center">
                        <div>
                            <FontAwesomeIcon className="mx-3" icon={faGoogle} />
                            <span className='badge text-primary' id="googleAdvice"> Inicia sesión con google para terminar tu compra</span>
                        </div>
					</DivOrden>
				)}
			</div>
		</DivCheckout>
	);
};

