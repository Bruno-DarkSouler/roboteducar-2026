import React from "react";
import {  } from "../node_modules/socket.io/client-dist/socket.io";
import "./css/general.css";

const socket = io();
socket.on('Hola a', (gapura_pico, calificacion) => {
  console.log(gapura_pico + "GOGOGOOOGOGOGOGOOG", calificacion);
})

class DatosDron extends React.Component{
  constructor(props){
    super(props);
    this.state = {pos: {x: "--", y: "--"}, bateria: 0};
  }

  render(){
    return(
      <>
      <div id="datos_dron">
      <div id="nombre_dron">
        Nombre: {props.nombre}
      </div>
      <div id="pos_dron">
        <div>
          X: 
        </div>
        <div>
          Y:
        </div>
      </div>
      <div id="bateria_dron">
        50%
      </div>
    </div>
      </>
    )
  }
}

function App() {
  return (
    <>
    <div className="grilla5050">
      <div className="contenedor_elemento_grilla">
        
      </div>
      <div className="contenedor_elemento_grilla">
        <div id="mapas_drones">
          <div className="grilla7030">
            <div>Mapa</div>
          </div>
          <div className="scroll_horizontal">
            <div className="mapa"> 
              Mapa
            </div>
            <div className="mapa"> 
              Mapa
            </div>
            <div className="mapa"> 
              Mapa
            </div>
            <div className="mapa"> 
              Mapa
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App