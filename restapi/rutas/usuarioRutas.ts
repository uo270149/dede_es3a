import express, { Request, Response } from 'express';
import Usuario from '../modelos/usuarioModelo';
import "dotenv/config";

//Obtenemos la url de la apirest de Heroku o utilizamos localhost por defecto
let URL_BASE:string = `${process.env.API_REST_URL_BASE_LOCAL}`
if(process.env.PORT) {
  URL_BASE = `${process.env.API_REST_URL_BASE_HEROKU}`
}

const router = express.Router()

router.get('/users/login/:username/:password', async (req: Request, res: Response) => {
    //formato de salida que espera el front-end
    type User = {
      username: String;
      password: String;
    }
  
    let resultado:User[] = new Array<User>();
    //Parametros
    const paramUser:string = req.params.username;
    const paramPass:string = req.params.password;
    //Realizamos la busqueda por referencia
    const user = await Usuario.findOne({username: paramUser, password: paramPass})
    if(user){
      let entrada = user;
      let salida: User = ({ username: "", password:""});
      salida.username = entrada.username;
      salida.password = entrada.password;
      resultado.push(salida);
      return res.status(200).send(resultado);
    } else{
      return res.status(500).json();
    }

})

export { router as usuarioRouter }