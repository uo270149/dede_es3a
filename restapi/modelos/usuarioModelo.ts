import mongoose from 'mongoose';
import { ObjectId } from 'bson';

export interface IUsuario {
    username:String;
    password:String;
}

interface UsuarioDoc extends mongoose.Document {
    _id: ObjectId;
    username:String;
    password:String;
}

interface UsuarioModelInterface extends mongoose.Model<UsuarioDoc> {
    build(attr: IUsuario): UsuarioDoc
}

const usuarioSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
})

usuarioSchema.statics.build = (attr: IUsuario) => {
    return new Usuario(attr)
}

const Usuario:UsuarioModelInterface = mongoose.model<UsuarioDoc,UsuarioModelInterface>('Usuario',usuarioSchema)

export { Usuario, UsuarioDoc }

