import express, { Request, Response, Router } from 'express';
import {check} from 'express-validator';
import {TypeProduct} from './shared/shareddtypes';
import {productSchema} from './models/Product';

const api:Router = express.Router()

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
"/users/add",[
  check('name').isLength({ min: 1 }).trim().escape(),
  check('email').isEmail().normalizeEmail(),
],
async (req: Request, res: Response): Promise<Response> => {
  let name = req.body.name;
  let email = req.body.email;
  let user: User = {name:name,email:email}
  users.push(user);
  return res.sendStatus(200);
}
);

api.get(
  "/products/list", async (req: Request, res: Response): Promise<Response>=> {
  //var productsList: Array<TypeProduct> =  await productSchema.find();
  const p1 : TypeProduct = {
    nombre: 'Nike Air Max 90',
    precio: 149.99,
    imagen: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/75d0471d-9d61-49c2-b1f9-fff297b10dd7/air-max-90-surplus-zapatillas-rpgT3V.png'
  }
  const p2 : TypeProduct = {
    nombre: "Adidas de Pixar",
    precio: 149.99,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_agk4j-1Ofuy6yUvowjpcBVctwkywepbJrWaw717uf1_0qipyfDN5ZGbCFhm0ytAtEy4&usqp=CAU'
  }
  const p3 : TypeProduct = {
    nombre: "Zapatilla NMD_R1 V2",
    precio: 140,
    imagen: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/b1fb22faa98a4626bba9ad110106940f_9366/Zapatilla_NMD_R1_V2_Negro_GX0540_01_standard.jpg'
  }
  const p4 : TypeProduct = {
    nombre: "Zapatillas Grand Court Base",
    precio: 119.99,
    imagen: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/1790130ab31944ddbb90aa4300cd10a9_9366/Zapatillas_Grand_Court_Base_Blanco_EE7904_01_standard.jpg'
  }
  const p5 : TypeProduct = {
    nombre: "Nike Air Force 1",
    precio: 110,
    imagen: 'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_3.0/w_300,c_limit/d9f1d9ee-a848-4a36-aab9-48b241078ebb/air-force-1-le-zapatillas-nino-a-D59pRJ.png'
  }
  const p6 : TypeProduct = {
    nombre: "Nike Blazer Mid 77 Vintage",
    precio: 99.99,
    imagen: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1a0c1fb4-564f-441d-93a2-f41dc5007bcd/blazer-mid-77-vintage-zapatillas-t7wWrK.png'
  }
  const p7 : TypeProduct = {
    nombre: "Nike Air Max Plus",
    precio: 169.99,
    imagen: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/lx0owmisj943sr59emb8/air-max-plus-zapatillas-07mFHd.png'
  }
  const p8 : TypeProduct = {
    nombre: "Zapatilla Courtmaster",
    precio: 56,
    imagen: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b99930d3-563a-49ee-8460-54b618dd52ea/air-max-plus-zapatillas-xKRLd1.png'
  }
  var productsList: Array<TypeProduct> =  [ p1, p2, p3, p4, p5, p6, p7, p8 ];
  return res.status(200).send(productsList);
});




export default api;