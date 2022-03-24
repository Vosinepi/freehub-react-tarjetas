import React from "react";
import "./assets/css/font.css";
import "./App.css";
import Testimonio from "./componentes/Testimonio";

function App() {
  let testimonios = require("./assets/jsons/testimonios.json");
  console.log(testimonios[1].nombre);
  console.log(testimonios.length);

  return (
    <div className="app">
      <div className="contenedor-principal">
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <div className="tarjetas">
          {testimonios.map((data, key) => {
            return (
              <Testimonio
                key={key}
                nombre={data.nombre}
                pais={data.pais}
                imagen={data.nombre}
                cargo={data.cargo}
                empresa={data.empresa}
                testimonio={data.testimonio}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
