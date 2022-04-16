import mongoose, { ObjectId } from 'mongoose';

export interface IProducto {
    referencia:String;
    marca:String;
    modelo: String;
    color: String;
    precio: Number;
    descripcion: String;
    categoria:String; //Hombre, Mujer, Niño, Niña
    fotos: Foto[];
    tallas: Talla[];
}

interface Foto{
    ruta:String;
    descripcion: String;
}  

interface Talla {
    numero: String;
    cantidad: Number;
}

interface ProductoDoc extends mongoose.Document {
    _id: ObjectId;
    referencia:String;
    marca:String;
    modelo: String;
    color: String;
    precio: Number;
    descripcion: String;
    categoria:String; //Hombre, Mujer, Niño, Niña
    fotos: Foto[];
    tallas: Talla[];
}

interface ProductoModelInterface extends mongoose.Model<ProductoDoc> {
    build(attr: IProducto): ProductoDoc
}

const productoSchema = new mongoose.Schema({
    referencia: {
        type: String,
        required: true,
        trim: true
    },
    marca: {
        type: String,
        required: true,
        trim: true
    },
    modelo: {
        type: String,
        required: true,
        trim: true
    },
    color: {
        type: String,
        required: true,
        trim: true
    },
    precio: {
        type: Number,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        required: false,
        trim: true
    },
    categoria: {
        type: String,
        required: false,
        trim: true
    },
    fotos: [{
        ruta:{
            type: String,
            required: true,
            trim: true
        },
        descripcion:{
            type: String,
            required: false,
            trim: true
        }
    }],
    
    tallas:[{
        numero:{
            type: String,
            required: true,
            trim: true
        },
        cantidad:{
            type: Number,
            required: true
        }
    }],
})

productoSchema.statics.build = (attr: IProducto) => {
    return new Producto(attr)
}

const Producto:ProductoModelInterface = mongoose.model<ProductoDoc,ProductoModelInterface>('Producto',productoSchema)

export { Producto , ProductoDoc }

