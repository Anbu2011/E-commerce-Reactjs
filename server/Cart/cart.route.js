import express from 'express'
import { addToCart , getFromCart } from './cart.controller.js';
const router = express.Router();


//post cart
router.post('/', addToCart)

//get cart
router.get('/:email', getFromCart)

export default router