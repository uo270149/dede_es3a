import request, {Response} from 'supertest';
import express, { Application, RequestHandler } from 'express';
import * as http from 'http';
import bp from 'body-parser';
import cors from 'cors';
import api from '../api';
import { productoRouter } from '../rutas/productoRutas';

let app:Application;
let server:http.Server;

beforeAll(async () => {
    app = express();
    const port: number = 5000;
    const options: cors.CorsOptions = {
        origin: ['http://localhost:3000']
    };
    app.use(cors(options));
    app.use(bp.json());
    app.use("/api", api);
    app.use("/products",productoRouter);
   // app.use("/apiUser", usuarioRouter);
   // app.use('/apiProduct', productoRouter);

    server = app.listen(port, ():void => {
        console.log('El servidor de restapi para pruebas es '+ port);
    }).on("error",(error:Error)=>{
        console.error('Error occured: ' + error.message);
    });
});

afterAll(async () => {
    server.close() //close the server
  //  mongoose.connection.close(); //close database
})

describe('user ', () => {
    /**
     * Probar que podemos listar usuarios sin errores
     */
    it('can be listed', async () => {
        const response: Response = await request(app).get("/api/users/list");
        expect(response.statusCode).toBe(200);
    });

    /**
     * Probar que un usuario puede ser creado a través de productService sin lanzar errores
     */
    it('can be created correctly', async () => {
        let username: string = 'Pablo';
        let email: string = 'gonzalezgpablo@uniovi.es';
        const response: Response = await request(app).post('/api/users/add').send({ name: username, email: email }).set('Accept', 'application/json');
        expect(response.statusCode).toBe(200);
    })
    }); 

describe('product', () => {
    /**
     * Probar que podemos listar productos sin errores
     */
    it('can be listed', async () => {
        const response: Response = await request(app).get('/products/list');

        // todo en orden
        expect(response.statusCode).toBe(200);
    })
}); 