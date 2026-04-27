import {  } from "../node_modules/socket.io/client-dist/socket.io";

const socket = io();
socket.on('Hola a', (gapura_pico, calificacion) => {
  console.log(gapura_pico + "GOGOGOOOGOGOGOGOOG", calificacion);
})

function App() {
  return (
    <>
    <div>
      <div id="datos_dron">
        
      </div>
    </div>
    </>
  );
}

export default App