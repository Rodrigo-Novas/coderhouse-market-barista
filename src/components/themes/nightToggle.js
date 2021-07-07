import React from "react" //use efect despues de renderizar se ejecuta
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
export const nightToogle = (prop) => {
    const night = prop.propNight;
    return(
        <button onClick={night}><FontAwesomeIcon icon={faMoon} /></button>
    )
}