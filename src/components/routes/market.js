import React from "react" //use efect despues de renderizar se ejecuta
import { ItemListContainer } from "./itemListContainer";

export const Processes = () => {

    return(<div className="row">
        <div className="col-md-12 my-4 mx-4">
            <h1>Market</h1>
        </div>
        {/* aplicate prop greeting */}
        <ItemListContainer product="Coffe of salamanca"/>
        <div className="col-md-12 my-2 mx-4">
            <p>Coderhouse - In this place we will see the cards with the products

            Lorem---------------------------------------------------------------------------
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Cumque soluta quia esse est modi quibusdam, ut ipsum necessitatibus. 
            Perspiciatis earum beatae sed ipsa corrupti mollitia 
            facere fugiat, temporibus aperiam! Sunt debitis dicta ut iste quos? Dolores
            obcaecati natus excepturi culpa commodi! Repellat ea ab, nihil maxime autem magni quo 
            atque culpa recusandae expedita eos, est, illo doloremque. Ipsa sapiente libero minus 
            asperiores obcaecati consequuntur veniam repellat ullam, necessitatibus ex quae voluptatibus 
            aspernatur nihil accusamus sunt soluta similique. Eos soluta rerum voluptas vel harum aliquam eius 
            voluptatibus! 
            Ducimus culpa nobis eum adipisci quis voluptates in aliquid architecto? Quae, facere natus. Sequi!</p>
        </div>
        
    </div>)
}