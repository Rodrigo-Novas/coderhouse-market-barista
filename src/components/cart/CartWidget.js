import React, {useContext} from "react" //use efect despues de renderizar se ejecuta
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../cart/cartContext"
export const Carts = () => {
    const { cart } = useContext(CartContext)
    return(
      <div>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span class='badge badge-warning' id='lblCartCount'> {cart.length} </span>
      </div>
    )
}