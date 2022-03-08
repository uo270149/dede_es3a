import { RequestHandler } from "express";
import { productSchema } from "../models/Product";

export const getProducts: RequestHandler = async (req, res) => {
  try {
    const products = await productSchema.find();
    return res.json(products);
  } catch (error) {
    res.json(error);
  }
};