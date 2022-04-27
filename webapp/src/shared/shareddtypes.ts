import { ObjectId } from 'bson';

export type User = {
    username:string;
    password:string;
  }

export type Product = {
   nombre: string;
   precio: number;
}

export type TypeProduct = {
  _objectId: ObjectId;
  id: string;
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
}