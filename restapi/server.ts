import express, {Request, Response} from 'express'; 
import cors from "cors";
import mongoose from 'mongoose';
import morgan from 'morgan';
import { json } from 'body-parser';
import config from './config'
import { productoRouter } from './rutas/productoRutas';
import { usuarioRouter } from './rutas/usuarioRutas';
import { pedidoRouter } from './rutas/pedidoRutas';
import http from 'http';
import "dotenv/config";
import path from "path";
const app = express()

app.use(cors({
  origin: ['http://localhost:3000'] // Fronted URL goes here
}));
app.use(morgan('dev'));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({extended: true})) // for parsing application/x-www-form-urlencoded
app.use(productoRouter)
app.use(usuarioRouter)
app.use(pedidoRouter)

app.use(express.static(path.join(__dirname, "..", "..", "..", "webapp", "build")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "..", "webapp", "build", "index.html"));
});
mongoose.Promise = global.Promise;
mongoose.connect(config.mongoose.uri)
    .catch(err => console.error(err))
    .then(() => {
        // Server Setup
        const port = process.env.PORT || 8000
        http.createServer(app).listen(port, () => {
            console.log(`\x1b[32m`, `Server listening on: ${port}`, `\x1b[0m`)
        });
    });
