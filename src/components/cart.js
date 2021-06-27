import React from "react" //use efect despues de renderizar se ejecuta
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
export const Carts = () => {

    return(
      <div>
        <FontAwesomeIcon icon={faShoppingCart} />
      </div>
    )
}