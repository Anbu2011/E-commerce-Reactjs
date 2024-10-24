import express from 'express'
import { getAllProducts, createNewProduct, updateProduct, deleteProduct, getProductById } from './products.controller.js';

import {verifyToken} from '../Middlewares/verifyToken.js'

const router = express.Router();

router.get('/', verifyToken, getAllProducts)
router.get('/:id', verifyToken, getProductById)

router.post('/', createNewProduct)
router.put('/', updateProduct)
router.delete('/:id', deleteProduct)

export default router
