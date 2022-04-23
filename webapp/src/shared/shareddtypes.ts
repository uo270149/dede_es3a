import { ObjectId } from 'mongoose';

export type User = {
    username:string;
    password:string;
  }

export type Product = {
    name: string;
    precio: number;
  }

export type ListProduct = {
  img: string;
  title: string;
  author: string;
}

export type TypeProduct = {
  _objectId: ObjectId;
  id: string;
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
}