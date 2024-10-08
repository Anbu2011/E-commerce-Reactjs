import express from 'express'
import { getAllProducts, createNewProduct, updateProduct, deleteProduct, getProductById } from './products.controller.js';
const router = express.Router();

router.get('/showAllProducts', getAllProducts)
router.get('/showProductByID', getProductById)
router.post('/createProduct', createNewProduct)
router.put('/updateProduct', updateProduct)
router.delete('/deleteProduct', deleteProduct)

export default router
