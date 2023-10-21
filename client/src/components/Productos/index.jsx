import React, { Children } from "react";

function Productos({children}) {
    return(
        <>
            <ul className="ul--producto">
                {children}
            </ul>
        </>
    )
}

export { Productos }