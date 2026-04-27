import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const app = express();
app.set({"Content-type:" : "application/javascript"})
const server = createServer(app);
const io = new Server(server);

const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(__dirname);

app.get('/', (req, res) => {
  // res.sendFile(join(__dirname, 'envio.html'));
  console.log("App abierta");
})

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  io.emit('Hola a', "Tomori", 10);

  socket.on('disconnect', () => {
    console.log('Un usuario se desconecto');
  });
});

server.listen(3000, () => {
  console.log("Servidor escuchando en 3000");
});   