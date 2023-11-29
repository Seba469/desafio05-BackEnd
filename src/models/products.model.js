import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: { type: String, require: true },
    description: { type: String, require: true },
    price: { type: Number, require: true },
    thumbnail: { type: String, require: true },
    code: { type: String, unique: true, require: true },
    stock: { type: Number, require: true }
}, {timestamps: true})

export default mongoose.model('products', productSchema)

//  655fe86d5ac1d4e4a5a963bd