import productsModel from "../models/products.model.js";

export default class ProductsManager {
    
    static get () {
        return productsModel.find()
    }

    static async getById (pid) {
        const products = await productsModel.findById(pid)
        if (!products){
            throw new Error('Product not found')
        }
        return products
    }

    static async create (data) {
        const newProduct = await productsModel.create(data)
        console.log(`Prducto creado correctamente ${newProduct.id}`);
        return newProduct
    }

    static async updateById (pid, data) {
        await productsModel.updateOne({ _id: pid }, { $set: data })
        console.log(`Prducto creado correctamente ${pid}`);
    }

    static async deleteById (pdi) {
        await productsModel.deleteOne({ _id: pdi })
        console.log(`Producto eliminado correctamente ${pdi}`);
    }
}