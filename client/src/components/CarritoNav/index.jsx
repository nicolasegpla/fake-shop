import React from "react";
import { CountProduct } from "../CountProduct";
import { IconCarrito } from "./IconCarrito";
import { TiendaContext } from "../TiendaContext/TiendaContext";
import "./carritoNav.css"

function CarritoNav() {

    const { listProduct, setListProduct } = React.useContext(TiendaContext);

    const openCarList = () => {
        setListProduct(estado => !estado);
    }

    return(
        <>
            <div onClick={openCarList} className="div__carrito--nav">
                <CountProduct />
                <IconCarrito />
            </div>
        </>
    )
}

export { CarritoNav }