import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { TiendaContext } from "../TiendaContext/TiendaContext";
import './producto.css'


function Producto({name, img, price, description, elemento}) {

    const { add } = useContext(TiendaContext);
    
    


    return(
        <>
           
                <li className="div--card--producto">
                    
                        <h3>{name}</h3>
                        <img width="100px" src={img} alt="" />
                        <p className="price">$: {price}</p>
                        <button className="verMas" >Ver mas</button>
                        <button className="add" onClick={() => add(elemento)}>Agregar al carrito</button>
                </li>
           
            
        </>
    )
}

export { Producto }