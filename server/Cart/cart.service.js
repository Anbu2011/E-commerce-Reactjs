import { CartDB } from './cart.db.js'
import Product from "../Products/products.model.js";

export const CartService = {
    
    getCartItems : async (email) =>{
        return await CartDB.getCartItems(email)
    },

    addToCart : async (email, productID, quantity) =>{
        const cart = await CartDB.getCartItems(email)

        const product = await Product.findOne({productID})

        if (!product){
            return res.status(404).json({ error: 'Product not found' });
        }

        const productPrice = product.price

        if(!cart){
            return await CartDB.createCart(email, productID, quantity, productPrice)
        }

        const updatedCart = await CartDB.updateCart(cart, productID, quantity, productPrice)
        return updatedCart
    },

}