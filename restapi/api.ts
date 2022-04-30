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

api.get('/products/list', async (req: Request, res: Response) => {
    //formato de salida que espera el front-end
    type TypeProduct = {
      _objectId: ObjectId;
      id: String;
      nombre: String;
      precio: Number;
      imagen: String;
    }
  
    let resultado:TypeProduct[] = new Array<TypeProduct>();
  
    const productos:ProductoDoc[] = await Producto.find({})
    
    for (var i=0; i< productos.length; i++)
    {
        let entrada:ProductoDoc = productos[i];
        let salida: TypeProduct = ({ _objectId: entrada._id, id: "", nombre:"",precio:0,imagen: "" });
        salida.id = entrada.referencia;
        salida.nombre = entrada.marca + " " +entrada.modelo;
        salida.precio = entrada.precio;
        //Recuperamos la imagen principal asociada a este producto
        if (entrada.fotos.length != 0){
          salida.imagen = entrada.fotos[0].ruta;
        }
        else{
          salida.imagen = ""; //buscar una imagen por defecto si no hay principal
        }
        resultado.push(salida);
    }
    return res.status(200).send(resultado)
  });


module.exports = api;
export default api;