import React from "react";
 import "../hojas-de-estilo/Testimonio.css";

const Testimonio = (props) => {
  console.log(props.imagen)
  return (
    <div className="contenedor-testimonio">
      <img
        src={require(`../imagenes/${props.imagen}.png`)}
        alt={`foto de ${props.nombre}`}
        className="imagen-testimonio"
      />
      <div className="contenedor-texto-testimonio">
        <p className='nombre-testimonio'>
        <strong>{props.nombre}</strong> en {props.pais}
        </p>
        <p className='cargo-testimonio'>
        {props.cargo} en <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}
export default Testimonio;