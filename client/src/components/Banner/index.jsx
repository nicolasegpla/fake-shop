import React from "react";
import doonaB from "./doonaB.jpg"
import "./banner.css"

function Banner() {
    return(
        <>
            <img className="banner" src={doonaB} alt="banner" />
        </>
    )
}

export { Banner }