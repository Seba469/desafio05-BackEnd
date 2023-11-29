import { Router } from "express";
import ProductsManager from "../../dao/products.manager.js";

const router = Router()

router.get('/products', async (req, res) => {
    try {
        const products = await ProductsManager.get()
        res.status(200).json(products)
    }
    catch(error){
        console.log (`Ocurrio un error: ${error.message}`)
    }
})

router.get('/products/:pid', async (req, res) => {
    try {
        const { pid } = req.params
        const products = await ProductsManager.getById(pid)
        res.status(200).json(products)
    }
    catch(error){
        console.log (`Ocurrio un error: ${error.message}`)
    }
})

router.post('/products', async (req, res) => {
    try {
        const { body } = req
        const product = await ProductsManager.create(body)
        res.status(201).json(product)
    }
    catch(error){
        console.log (`Ocurrio un error: ${error.message}`)
    }
})

router.put('/products/:pid', async (req, res) => {
    try {
        const { pid } = req.params
        const { body } = req
        await ProductsManager.updateById(pid, body)
        res.status(204).end()
    }
    catch(error){
        console.log (`Ocurrio un error: ${error.message}`)
    }
})

router.delete('/products/:pid', async (req, res) => {
    try {
        const { pid } = req.params
        await ProductsManager.deleteById(pid)
        res.status(204).end()
    }
    catch(error){
        console.log (`Ocurrio un error: ${error.message}`)
    }
})

export default router