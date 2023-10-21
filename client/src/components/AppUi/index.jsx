import React from "react";
import { TiendaContext } from "../TiendaContext/TiendaContext";
import { Productos } from "../Productos";
import { Producto } from "../Producto";
import { Filtro } from "../Filtro";
import { Carrito } from "../Carrito";
import { Nav } from "../Nav";
import { Banner } from "../Banner";
import { Footer } from "../Footer";
import "./appui.css"




function AppUi() {
    const { data, listProduct } = React.useContext(TiendaContext)
    return (
        <>
            <Nav />
            {listProduct ? <Carrito /> : ''}
            <Banner />
            <h1 className="h1__ui">Nuestros Productos</h1>
            <Filtro />
            <Productos>
                {data.map((producto) => (
                    <Producto 
                        key={producto.id}
                        name={producto.name}
                        img={producto.img}
                        price={producto.price}
                        description={producto.description}
                        elemento={producto}
                    />
                ))}
            </Productos>
            <Footer />
            
        </>
    )
}

export { AppUi }