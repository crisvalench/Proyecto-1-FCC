import React from "react";
import '../styles/Testimonio.css'

export function Testimonio(props){
    return(
        <div className="contenendor-testimonio">
            <img 
            className="imagen-testimonio"
            src={ require(`../image/${props.imagen}.png`)}
            alt='Foto de Emma'/>
        <div className="contenedor-texto-testimonio">
            <p className="nombre-testimonio"><strong>{props.nombre}</strong> in {props.pais}</p>
            <p className="cargo-testimonio">{props.cargo} at <strong>{props.empresa}</strong></p>
            <p className="texto-testimonio">{props.testimonio}</p>
        </div>
        </div>
    )
}