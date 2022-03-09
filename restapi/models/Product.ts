const mongoose = require('mongoose')
const { model, Schema } = mongoose


const product = new Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    precio: {
        type: Number,
        required: true,
        trim: true
    }
}, {
    versionKey: false,
    timestamps: true
})


export const productSchema = model('Product', product)