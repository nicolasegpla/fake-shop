import React from "react";
import { TiendaContext } from "../TiendaContext/TiendaContext";
import "./count.css"

function CountProduct() {

    const{ count } = React.useContext(TiendaContext);

    return(
        <>
        <section className="count">
            <div className="count--div">
                <p className="count__p">{count}</p>
            </div>

        </section>
            
        </>
    ) 
}

export { CountProduct }