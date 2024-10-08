import { Cart } from "./cart.model";
import { Product } from "../Products/products.model";

// Add product to cart
const addToCart = async (req, res) =>{
    const {userId} = req.body;
    const productId = req.params.Id
    const quantity = req.body.quantity || 1;

    let cart = await Cart.findOne({ userId });
    const product = await Product.findById(productId)

    if(!product) {
        return res.status(404).json({ error: 'product not found'})
    }
    
    const productPrice = product.price

    if(!cart){
        cart = new Cart({
            userId, 
            products:[{id : productId, quantity}],
            totalPrice : quantity * productPrice
        })
    } else{
        const productIndex = cart.products.findIndex(p => p.id.toString() === id)
        if(productIndex > -1){
            cart.products[productIndex].quantity += quantity
        } else{
            cart.products.push({id: productId, quantity})
        }

        cart.totalPrice = await calculateTotalPrice(cart.products)
    }

    await cart.save()
    res.status(201).json(cart)

}
const calculateTotalPrice = async (products) =>{
    let totalPrice = 0

    for (const product of products){
        const productData = await Product.findById(product.id)
        if(productData){
            totalPrice += product.quantity * productData.price
        }
    }

    return totalPrice
}

// Get from cart
const getFromCart = async (req, res) =>{
    const {userId} = req.params

    const cart = await Cart.findOne({userId}).populate('products.id')
    if(!cart){
        return res.status(404).json({ error: 'Cart not found' });
    } else{
        res.status(200).json(cart);
    }
}

export {addToCart, getFromCart}