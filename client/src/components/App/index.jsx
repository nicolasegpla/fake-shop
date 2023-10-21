import React, { StrictMode } from "react";
import { AppUi } from "../AppUi";
import { DataProvider } from "../TiendaContext/TiendaContext"

function App() {
    return(
        <>
            <DataProvider >
                <AppUi />
            </DataProvider>
            
        </>
    )
}

export { App }
