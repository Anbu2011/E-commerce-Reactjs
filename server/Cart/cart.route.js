import express from 'express'
import { addToCart, getFromCart } from './cart.service';
const router = express.Router();

//get cart
router.get('/cart', getFromCart)

//post cart
router.post('/productdetails/:Id', addToCart)