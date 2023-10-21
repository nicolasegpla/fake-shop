import React, { useContext } from "react";
import { TiendaContext } from "../TiendaContext/TiendaContext";
import { useMercadoPago } from "../MercadoPago/useMercadoPago";
import { Wallet } from '@mercadopago/sdk-react'
import { IconClose } from "./IconClose";
import "./carrito.css"

function Carrito() {
    const { item, eliminar, total, vaciarCarrito } = React.useContext(TiendaContext);

    const { handleBuy, preferenceId } = useMercadoPago();

    const customization = {
        visual: {
            buttonBackground: 'black',
            borderRadius: '6px',
            buttonHeight: '90px'
        },
        texts: {
            action: 'pay',
            valueProp: 'security_safety',
          },
       }
       

    return(
        <>
            <section className="carrito--item">
                
                {item.length ?
                ( 
                    item.map((p) => (
                        <div 
                            className="div--card--carrito"  
                            key={p.id}
                            elemento={p}
                        >
                            <p>{p.cantidad}</p>
                            <p className="p__name">{p.name}</p>
                            <p>{p.price}</p>
                            <button className="button__p" onClick={() => eliminar(p)}><IconClose /></button>
                        </div>
                        
                    ))
                    
                    
                ) : (<p className="p__carrito">Tu carrito esta vacio</p>)
                }
                {
                    item.length ?
                    (
                    <div className="info-compra">
                        <p className="total-compra__p">Total: {total}</p>
                        <button onClick={handleBuy} className="pagar-compra">Pagar</button>
                        <button className="borrarCarrito" onClick={vaciarCarrito}>Vaciar carrito</button>
                        
                    </div>
                
                    ) : ('')
                }
                {preferenceId && 
                            <Wallet customization={customization} className="wallet" initialization={{ preferenceId, redirectMode: 'modal' }}  />
                        }

            </section>
            
            
        </>
    )
}

export { Carrito }