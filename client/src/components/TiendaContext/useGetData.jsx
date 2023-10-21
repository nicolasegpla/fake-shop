import React from "react";
import { useEffect, useState } from "react";
function useGetData(urlApi) {
    const [opcion, setOpcion] = useState('all');
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(urlApi)
            .then((respuesta) => respuesta.json())
            .then((data) => {
                if(opcion !== 'all') {
                    setData(data.filter((p) => p.categories == opcion))
                }else {
                    setData(data)
                }
         
            })
            .catch((error) => console.log('tenemos error de carga'))
    }, [opcion])

    function verElCambio(event) {
        const opcion = event.target.value
        setOpcion(opcion)
    }

    return { 
        data,
        opcion,
        verElCambio,
        };
}

export { useGetData }