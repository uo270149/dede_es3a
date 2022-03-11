import express, { Request, Response, Router } from 'express';
import * as ProductController from '../controllers/ProductController';

const api:Router = express.Router()

api.get('/products/list', ProductController.getProducts)

export default api