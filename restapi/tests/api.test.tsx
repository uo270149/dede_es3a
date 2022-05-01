import request, { Response } from 'supertest';
import { Application } from 'express';

let app: Application;
//let server: http.Server;
const servidor = require('./servidor_test');

beforeAll(async () => {
    /* app = express();
    const port: number = 5000;
    const options: cors.CorsOptions = {
        origin: ['http://localhost:3000']
    };
    app.use(cors(options));
    app.use(bp.json());
    app.use("/api", api);

    server = app.listen(port, (): void => {
        console.log('Servidor Restapi para testing escuchando en ' + port);
    }).on("error", (error: Error) => {
        console.error('Error ocurrido: ' + error.message);
    }) */

    // Iniciar la base de datos
    await servidor.startBD();
    // Iniciar el servidor
    app = await servidor.startServidor();

});

afterAll(async () => {
    //server.close();

    // Cerrar el servidor
    await servidor.closeServidor();
    // Cerrar la base de datos
    await servidor.closeBD();
});

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

describe('producto', () => {
    /**
     * Probar que podemos listar productos sin errores
     */
    it('can be listed', async () => {
        const response: Response = await request(app).get("/api/products/list");
        const productos: [] = response.body;

        expect(response.statusCode).toBe(200);
        
        expect(productos.length).toEqual(11);
    });

    /**
     * Encontrar un producto por su referencia
     */
         it('find by referencia', async () => {
            const referencia = "9z";

            const response: Response = await request(app).get("/api/products/detalles/"+ referencia);
            const producto: [] = response.body;
    
            expect(response.statusCode).toBe(200);
            
            expect(producto.length).toEqual(1);
        });


    /**
     * Probar que no obtenemos nada al buscar un producto que no existe
     */
    it('Producto que no existe en el sistema ', async () => {
        // Referencia de un producto inexistente
        let referencia: string = "62598e6c2941d14b30fbd6b4";
        // Buscamos un producto con esa referencia (inexistente)
        const response: Response = await request(app).get('/api/products/' + referencia);
        // El código de respuesta debería ser 404 (no encontrado)
        expect(response.statusCode).toBe(404);
    });
});

describe('pedidos', () => {
        /**
         * Encontrar los pedidos de un usuario
         */
        it('can be listed by user', async () => {
            const user = "admin";

            const response: Response = await request(app).get("/api/pedidos/list/" + user);
            const pedidos: [] = response.body;
    
            expect(response.statusCode).toBe(200);
            
            // admin tiene 3 pedidos
            expect(pedidos.length).toEqual(3);
        });
});