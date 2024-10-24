import Product from "../Products/products.model.js";
import {Cart} from './cart.model.js'

export const CartDB = {
    
    getCartItems : async (email) =>{
        return await Cart.findOne({email}).populate('products.id')
    },

    createCart : async (email, productID, quantity, productPrice) =>{
        const newCart = new Cart({
            email, 
            products:[{id : productID, quantity}],
            totalPrice : quantity * productPrice
        })
        return await newCart.save()
    },

    updateCart : async (cart, productID, quantity, productPrice) =>{
        const productIndex = cart.products.findIndex(p => p.id.toString() === productID.toString())
        if(productIndex > -1){
            cart.products[productIndex].quantity += quantity
        } else{
            cart.products.push({id: productID, quantity})
        }

        cart.totalPrice = await calculateTotalPrice(cart.products)
        return await cart.save();
    },
}

export const calculateTotalPrice = async (products) =>{
    let totalPrice = 0

    for (const product of products){
        const productData = await Product.findById(product.id)
        if(productData){
            totalPrice += product.quantity * productData.price
        }
    }
    return totalPrice
}
