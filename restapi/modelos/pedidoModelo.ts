import mongoose, { ObjectId } from 'mongoose';

export interface IPedido {
    usuario:String;
    precio:Number;
}

interface PedidoDoc extends mongoose.Document {
    _id: ObjectId;
    usuario:String;
    precio:Number;
}

interface PedidoModelInterface extends mongoose.Model<PedidoDoc> {
    build(attr: IPedido): PedidoDoc
}

const pedidoSchema = new mongoose.Schema({
    usuario: {
        type: String,
        required: true,
        trim: true
    },
    precio: {
        type: Number,
        required: true,
        trim: true
    },
})

pedidoSchema.statics.build = (attr: IPedido) => {
    return new Pedido(attr)
}

const Pedido:PedidoModelInterface = mongoose.model<PedidoDoc,PedidoModelInterface>('Pedido',pedidoSchema)

export { Pedido , PedidoDoc }
