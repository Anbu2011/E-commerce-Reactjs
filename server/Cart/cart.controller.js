import { CartService } from './cart.service.js'


// Get from cart
export const getFromCart = async (req, res) =>{
    const email = req.query
    
    try {
        const cartList = await CartService.getCartItems(email)
        if(!cartList){
            return res.status(404).json({success: false, message: 'Cart not found'})
        }
        res.status(200).json({success: true, cart: cartList})
        
    } catch (error) {
        res.status(500).json({success: false, message: 'Server error', error: error.message})
    }
}

// Add product to cart
export const addToCart = async (req, res) =>{
    const {email, productID, quantity=1 } = req.body;
    
    try {
        const cartList = await CartService.addToCart(email, productID, quantity)
        if(!cartList){
            return res.status(404).json({ error: 'cart or product not found'})
        }
        res.status(201).json({ message: 'Product added to cart', cart : cartList });
    } catch (error) {
        res.status(500).json({success: false, message: 'Server error', error: error.message})
    }
}