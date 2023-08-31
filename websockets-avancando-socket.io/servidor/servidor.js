import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";

import "./db/dbConnect.js";

const app = express();
const portaB = process.env.porta || 3000;
const portaF = process.env.porta || 5000;

const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico = path.join(caminhoAtual, "../..", "public");
app.use(express.static(diretorioPublico));

const servidorHttp = http.createServer(app);
const servidorHttp2 = http.createServer(app);

servidorHttp.listen(portaB, () => console.log(`Servidor back-end escutando na porta ${portaB}`));
servidorHttp2.listen(portaF, () => console.log(`Servidor front-end escutando na porta ${portaF}`));

const io = new Server(servidorHttp, {
  cors: {
    origin: "http://localhost:5000",
  },
});

export default io;
