import mongoose from 'mongoose'

interface IProduct {
    nombre: String;
    precio: Number;
    imagen: String;
  }
  
  interface ProductModelInterface extends mongoose.Model<ProductDoc> {
    build(attr: IProduct): ProductDoc
  }
  
  interface ProductDoc extends mongoose.Document {
    nombre: String;
    precio: Number;
    imagen: String;
  }

const productSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    precio: {
        type: Number,
        required: true,
        trim: true
    },
    imagen: {
        type: String,
        required: true,
        trim: true
    }
})

productSchema.statics.build = (attr: IProduct) => {
    return new Product(attr)
}

const Product = mongoose.model<ProductDoc,ProductModelInterface>('Product',productSchema)

Product.build({
    nombre: 'nombre',
    precio: 0.01,
    imagen: 'imagen'
})

export { Product}

