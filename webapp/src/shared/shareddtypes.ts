import { ObjectId } from 'bson';

export type User = {
  username:string;
  password:string;
}

export type Product = {
   nombre: string;
   precio: number;
}

export type Order = {
  usuario: string;
  precio: number;
  contenido: Array<string>;
}

export type TypeProduct = {
  _objectId: ObjectId;
  id: string;
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
}

export type TypeOrder = {
  _objectId: ObjectId;
  usuario: string;
  precio: number;
  contenido: Array<string>;
}