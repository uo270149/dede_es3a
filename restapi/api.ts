import express, { Request, Response, Router } from 'express';
import { check } from 'express-validator';
//import mongoose from 'mongoose';
import { IProducto } from './modelos/productoModelo';
import { IUsuario } from './modelos/usuarioModelo';
import { User } from '../webapp/src/shared/shareddtypes';

const Productos = require('./modelos/productoModelo');
const Usuarios = require('./modelos/usuarioModelo');
const mongoose = require('mongoose');
const api: Router = express.Router();

//This is not a restapi as it mantains state but it is here for
//simplicity. A database should be used instead.
let users: Array<User> = [];

api.get(
    "/users/list",
    async (req: Request, res: Response): Promise<Response> => {
        return res.status(200).send(users);
    }
);

api.post(
    "/users/add", [
    check('username').isLength({ min: 1 }).trim().escape(),
    check('password')
],
    async (req: Request, res: Response): Promise<Response> => {
        const id = req.body._id;
        const username = req.body.username;
        const password = req.body.password;
        const user: User = { username: username, password: password };

        return res.status(200).send(user);
        
    }
);

api.get(
    "/users/login/:user/:pass",
    async (req: Request, res: Response): Promise<Response> => {
        var user:string = req.params.user;
        var pass:string = req.params.pass;
        const usuario: IUsuario = await Usuarios.findOne( {username: user, password: pass} );
        if (usuario) {
            return res.status(200).send(usuario);
        } else {
            return res.status(404).json({ message: 'El usuario con nombre "${user}" no se ha encontrado.' });
        }
    }
)

api.get(
    "/products/list",
    async (req: Request, res: Response): Promise<Response> => {
        const productos: IProducto[] = await Productos.find({});
        return res.status(200).send(productos); // obtener productos de la bd
    }
);

api.get(
    "/products/:id",
    async (req: Request, res: Response): Promise<Response> => {
        var id = req.params.id;
        var objID = mongoose.Types.ObjectId(id);
        console.log(objID);
        const productos: IProducto = await Productos.findOne({ _id: objID });
        if (productos) {
            return res.status(200).send(productos);
        } else {
            return res.status(404).json({ message: 'El producto con nombre "${objID}" no se ha encontrado.' });
        }

    }
)

export default api;