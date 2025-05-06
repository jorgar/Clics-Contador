import React from "react";
import '../estilo/Boton.css';

export function Boton({texto, BtnClic, manejarClic}){
    return(
        <button className={BtnClic ? "btn-clic":"btn-reiniciar"}
        onClick={manejarClic}>
            {texto}
        </button>
    );
}