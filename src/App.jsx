import {  } from "../node_modules/socket.io/client-dist/socket.io";
import styles from "./css/general.module.css";

const socket = io();
socket.on('Hola a', (gapura_pico, calificacion) => {
  console.log(gapura_pico + "GOGOGOOOGOGOGOGOOG", calificacion);
})

function App() {
  return (
    <>
    <div>
      <div id="datos_dron">
        Datos
      </div>
      <div id="mapas_drones">
        <div className="{styles.grilla7030}">
          <div>Mapa</div>
        </div>
        <div className={styles.scroll_horizontal}>
          <div className={styles.mapa}> 
            Mapa
          </div>
          <div className={styles.mapa}> 
            Mapa
          </div>
          <div className={styles.mapa}> 
            Mapa
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App