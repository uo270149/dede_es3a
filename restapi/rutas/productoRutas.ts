import express, { Request, Response } from 'express';
import { Producto } from '../modelos/productoModelo';
import { RequestInfo, RequestInit } from 'node-fetch';
import { Foto } from '../modelos/fotoModelo';
import fetch from 'node-fetch';


const router = express.Router()

router.get('/producto/detalles/colores/:referencia', async (req: Request, res: Response) => {
  const ref = req.params.referencia;
  const colores = await Producto.find({ referencia: ref }, 'color');
  return res.json(colores);
})

router.get('/products/list', async (req: Request, res: Response) => {
  type TypeProduct = {
    id: String;
    nombre: String;
    precio: Number;
    imagen: String;
  }

  type TypeFoto = {
    ruta: String;
    descripcion: String;
    producto: String;
  }

  let resultado = new Array<TypeProduct>();

  const productos = await Producto.find({})

  for (var i = 0; i < productos.length; i++) {
    let entrada = productos[i];
    let salida: TypeProduct = ({ id: "", nombre: "", precio: 0, imagen: "" });
    salida.id = entrada.referencia;
    salida.nombre = entrada.marca + " " + entrada.modelo;
    salida.precio = entrada.precio
    //Recuperamos la imagen principal asociada a este producto
    const foto = await consultarREST('http://localhost:5000/foto/' + entrada.id) as TypeFoto[];
    salida.imagen = foto[0].ruta;
    resultado.push(salida)

  }
  return res.status(200).send(resultado)
})

router.post('/products/add', async (req: Request, res: Response) => {
  const { referencia, marca, modelo, color, precio, descripcion, categoria } = req.body;

  const product = Producto.build({ referencia, marca, modelo, color, precio, descripcion, categoria })
  await product.save()
  return res.status(201).send(product)
})

async function consultarREST(html: RequestInfo) {
  try {
    // 👇️ const response: Response
    const response = await fetch(html, {
      method: 'GET',
      headers: { Accept: 'application/json', },
    });

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const result = (await response.json());
    //console.log('result is: ', JSON.stringify(result, null, 4));
    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

export { router as productoRouter }