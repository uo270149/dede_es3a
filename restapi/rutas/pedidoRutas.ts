import express, { Request, Response } from 'express';
import { Pedido , PedidoDoc} from '../modelos/pedidoModelo';
import "dotenv/config";
import { ObjectId } from 'bson';

//Obtenemos la url de la apirest de Heroku o utilizamos localhost por defecto
let URL_BASE:string = `${process.env.API_REST_URL_BASE_LOCAL}`
if(process.env.PORT) {
  URL_BASE = `${process.env.API_REST_URL_BASE_HEROKU}`
}

const router = express.Router()

router.post('/pedidos/add', async (req: Request, res: Response) => {
  const { usuario, precio, contenido } = req.body;

  const order:PedidoDoc = Pedido.build({ usuario, precio, contenido })
  await order.save()
  return res.status(201).send(order)
})

router.get('/pedidos/list/:usuario', async (req: Request, res: Response) => {
  //formato de salida que espera el front-end
  type TypeOrder = {
    _objectId: ObjectId;
    usuario: String;
    precio: Number;
    contenido: Array<String>;
  }

  let resultado:TypeOrder[] = new Array<TypeOrder>();
  //Parametro usuario
  const user:string = req.params.usuario;
  //Realizamos la busqueda por usuario
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

export { router as pedidoRouter }