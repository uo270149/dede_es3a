import express from 'express';
import cors from "cors";
import mongoose from 'mongoose';
import { json } from 'body-parser';
import { productoRouter } from './rutas/productoRutas';
import { fotoRouter } from './rutas/fotoRutas';
import "dotenv/config";

const app = express()
app.use(json())
app.use(cors())

app.use(productoRouter)
app.use(fotoRouter)

mongoose
  .connect(`${process.env.MONGODB_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Conectado a la base de datos MongoDB "))
  .catch((err) => console.error("Error al conectar a MongoDB", err));

app
  .listen(parseInt(`${process.env.API_REST_PORT}`, 10), (): void => {
    console.log("REST api escuchando en el puerto " + `${process.env.API_REST_PORT}`);
  })
  .on("error", (error: Error) => {
    console.error("Error ocurrido: " + error.message);
  });
