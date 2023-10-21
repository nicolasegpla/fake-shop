import React from "react";
import { TiendaContext } from "../TiendaContext/TiendaContext";
import './filtro.css'



function Filtro() {

    const { verElCambio } = React.useContext(TiendaContext)
   
    function verElCambioq(event) {
        console.log(event.target.value)
    }

    return(
        <>
            <select className="filtro" onChange={verElCambio} name="" id="">
                <option value="all">All</option>
                <option value="stroller">Stroller</option>
                <option value="car-set">Car-set</option>
                <option value="accesories">accesories</option>
            </select>
        </>
    )
}

export { Filtro }