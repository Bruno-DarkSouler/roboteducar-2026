import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { isModuleNamespaceObject } from 'node:util/types';

const app = express();
app.set({"Content-type:" : "application/javascript"})
const server = createServer(app);
const io = new Server(server);


app.get('/', (req, res) => {
  // res.sendFile(join(__dirname, 'envio.html'));
  console.log("App abierta");
})

io.on('connection', (socket) => {

  io.emit('Hola a', "Tomori", 10);

  socket.on("bateria", (dron) => {
    io.emit("bateria", dron, Math.floor(Math.random() * 100))
  });

  socket.on("pos", (dron) => {
    let posicion = {
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100)
    }
    io.emit("pos", dron, posicion);
  }); 

  socket.on('disconnect', () => {
    console.log('Un usuario se desconecto');
  });
});

server.listen(3000, () => {
  console.log("Servidor escuchando en 3000");
});   