import React from "react";
import { CarritoNav } from "../CarritoNav";
import "./nav.css"

function Nav() {
    return(
        <>
            <nav className="nav">
                <h1 className="nav__h1">Bonbaby</h1>
                <CarritoNav />
            </nav>
        </>
    )
}

export { Nav }