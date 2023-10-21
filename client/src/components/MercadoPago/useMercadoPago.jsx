import React, { useState } from 'react'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
import { TiendaContext } from '../TiendaContext/TiendaContext';
import axios from "axios";




function useMercadoPago() {
    const [preferenceId, setPreferenceId] = useState(null);

    const { total } = React.useContext(TiendaContext);
   
    

    initMercadoPago('TEST-f42f7a90-d890-4d60-89f5-e0c2b2a2635d');

    const createPreference = async () => {
        try {
            const response = await axios.post("http://localhost:8080/create_preference", {
                description: "Total Compra",
                price: Number(total),
                quantity: 1,
            });

            const { id } = response.data;
            return id;

        } catch (error) {
            console.log(error)
        }
    };

    const handleBuy = async () => {
        const id = await createPreference();
        if(id) {
            setPreferenceId(id);
        }
    };


    return {
        handleBuy,
        preferenceId,
        setPreferenceId,
    }


}

export { useMercadoPago }