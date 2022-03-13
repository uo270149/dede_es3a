import express, { Request, Response} from 'express';
import { Foto } from '../modelos/fotoModelo';
import mongoose from 'mongoose'

const router = express.Router()

router.post('/foto/add', async (req: Request, res: Response) => {
  const { ruta, descripcion, producto } = req.body;

  const foto = Foto.build({ ruta, descripcion, producto })
  await foto.save()
  return res.status(201).send(foto)
})

//Devuelve la foto etiquetada como principal en descripcion
router.get('/foto/:producto', async (req: Request, res: Response) => {
  const foto = await Foto
  .find({   descripcion: 'principal',
            producto: req.params.producto
        });
  return res.status(200).send(foto)
})

export { router as fotoRouter }


