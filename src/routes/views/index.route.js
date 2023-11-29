import { Router } from "express";
import ProductsManager from "../../dao/products.manager.js";

const router = Router()

router.get('/', (req, res) => {
    res.render ('index', { title: 'Tienda Online' })
})

router.get('/products', async (req, res) => {
    const products = await ProductsManager.get()
    res.render('products', { products: products.map(product => product.toJSON()) })
})

router.get('/chat', (req, res) => {
    res.render('chat', { title: 'Chat de la cominidad 🎯' });
});

export default router