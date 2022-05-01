import { ObjectId } from 'bson';
import { Double } from 'mongodb';

export type User = {
    name:string;
    email:string;
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