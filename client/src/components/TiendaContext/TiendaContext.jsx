import React, { useEffect, useState } from "react";
import { useGetData } from "./useGetData";
import { useLocalStorage } from "./useLocalStorage";


const TiendaContext = React.createContext();

function DataProvider({children}) {

    const { data, opcion, verElCambio } = useGetData('http://localhost:3000/products');

    

    //const[dataCarrito, setDataCarrito] = useState([]);
    const[count, setCount] = useState(0);
    const[listProduct, setListProduct] = useState(false);
    const[total, setTotal] = useState(0);

    const { item, saveItem } = useLocalStorage('COMPRA_300', [])
    
    
    
    const add = elemento => {
        if(item.find(p => p.id === elemento.id)) {
            const product = item.map(p => p.id === elemento.id
                ? {...p, cantidad: p.cantidad + 1}
                : p
                );

                return saveItem([...product])
        }

        //setDataCarrito([ ...dataCarrito, elemento]); 
        saveItem([...item, elemento]);
        
    };

    const vaciarCarrito = () => {
        saveItem([]);
    }

    

    useEffect(() => {
        setCount(item.length)
        const valorsuma = item.map(p => p.price * p.cantidad)
        const totalp = valorsuma.reduce((total, valorsuma) => total + valorsuma, 0 )
        setTotal(totalp)
        
    }, [item]);

    const eliminar = (elemento) => {
        const dataeliminada = [...item];
        const todoIndex = dataeliminada.findIndex(
            (todo) => todo.id == elemento.id
        )
        dataeliminada.splice(todoIndex, 1)
        saveItem(dataeliminada);
        
    }
    
   

    return(
        <TiendaContext.Provider value={{
            data,
            opcion,
            verElCambio,
            //dataCarrito,
            //setDataCarrito,
            add,
            item,
            eliminar,
            count,
            listProduct,
            setListProduct,
            total,
            setTotal,
            vaciarCarrito
        }} >
            {children}
        </TiendaContext.Provider>
    )
}

export { TiendaContext, DataProvider}