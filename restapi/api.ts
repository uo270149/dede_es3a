import express, { Request, Response, Router } from 'express';
import { check } from 'express-validator';
import { ObjectId } from 'bson';
//import mongoose from 'mongoose';
import { IProducto, Producto, ProductoDoc} from './modelos/productoModelo';

const api: Router = express.Router();

interface User {
    name: string;
    email: string;
}

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
    check('name').isLength({ min: 1 }).trim().escape(),
    check('email').isEmail().normalizeEmail()
],
    async (req: Request, res: Response): Promise<Response> => {
        let name = req.body.name;
        let email = req.body.email;
        let user: User = { name: name, email: email };
        users.push(user);
        return res.sendStatus(200);
    }
);

api.get(
    "/products/list",
    async (req: Request, res: Response) => {
        var productos = await Producto.find().exec();
        return res.status(200).send(productos); // obtener productos de la bd
    });


module.exports = api;
export default api;