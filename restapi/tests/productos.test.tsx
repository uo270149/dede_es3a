import request, {Response} from 'supertest';
import { productoAPI } from '../modelos/productoModelo';

var app = require("../server");
var server = require("../server");

beforeAll(async () => {
});

afterAll(async () => {
    server.close() //close the server
})

describe('Product ', () => {
    // Recibimos un producto
    it('se encontro',async () => {
        var id = "62598ac12841d14b30fbd695";
        const response:Response = await request(app).get("/api/products/"+id);

        expect(response.statusCode).toBe(200);
        expect(JSON.stringify(response.body).length).toBeGreaterThan(0);
    });

})

function beforeAll(arg0: () => Promise<void>) {
    throw new Error("Function not implemented.");
}
function afterAll(arg0: () => Promise<void>) {
    throw new Error("Function not implemented.");
}

function expect(length: number) {
    throw new Error('Function not implemented.');
}

