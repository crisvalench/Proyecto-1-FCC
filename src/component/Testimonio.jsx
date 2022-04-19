import React from "react";

export function Testimonio(){
    return(
        <div className="contenendor-testimonio">
            <img 
            className="imagen-testimonio"
            src={ require("../image/emma.png")}
            alt='Foto de Emma'/>
        <div className="contenedor-texto-testimonio">
            <p className="nombre-testimonio">Emma Bostian in Sweden</p>
            <p className="cargo-testimonio">Software Engineer at Spotify</p>
            <p className="texto-testimonio">"I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."</p>
        </div>
        </div>
    )
}