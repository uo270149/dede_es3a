import express, { Request, Response, Router } from 'express';
import { check } from 'express-validator';
import { ObjectId } from 'bson';
import { Producto, ProductoDoc} from './modelos/productoModelo';
import { Pedido, PedidoDoc } from './modelos/pedidoModelo';

const api: Router = express.Router();

interface User {
    name: string;
    email: string;
}

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
        if (entrada.fotos.length != 0){
          salida.imagen = entrada.fotos[0].ruta;
        }
        else{
          salida.imagen = "";
        }
        resultado.push(salida);
    }
    return res.status(200).send(resultado)
  });

  api.get('/products/detalles/:referencia', async (req: Request, res: Response) => {
    type TypeProduct = {
      _objectId: ObjectId;
      id: String;
      nombre: String;
      precio: Number;
      descripcion: String;
      imagen: String;
    }
  
    let resultado:TypeProduct[] = new Array<TypeProduct>();
    const ref:string = req.params.referencia;
    const product = await Producto.findOne({referencia: ref})
    if(product){
      let entrada:ProductoDoc = product;
      let salida: TypeProduct = ({ _objectId: entrada._id, id: "", nombre:"",precio:0,descripcion:"",imagen: "" });
      salida.id = entrada.referencia;
      salida.nombre = entrada.marca + " " +entrada.modelo;
      salida.precio = entrada.precio
      salida.descripcion = entrada.descripcion;
  
      if (entrada.fotos.length != 0)
        salida.imagen = entrada.fotos[0].ruta;
      else
        salida.imagen = "" 
      resultado.push(salida)
      return res.status(200).send(resultado)
    } else{
      return res.status(500).json();
    }
    
  })

  api.get('/pedidos/list/:usuario', async (req: Request, res: Response) => {
    type TypeOrder = {
      _objectId: ObjectId;
      usuario: String;
      precio: Number;
      contenido: Array<String>;
    }
  
    let resultado:TypeOrder[] = new Array<TypeOrder>();
    const user:string = req.params.usuario;
    const orders:PedidoDoc[] = await Pedido.find({usuario: user})
    
    for(var i=0; i< orders.length; i++) {
      let entrada:PedidoDoc = orders[i];
      let salida: TypeOrder = ({ _objectId: entrada._id, usuario: "", precio:0, contenido:[] });
      salida.usuario = entrada.usuario;
      salida.precio = entrada.precio;
      salida.contenido = entrada.contenido;
  
      resultado.push(salida);
    }
    return res.status(200).send(resultado);
  })

module.exports = api;
export default api;