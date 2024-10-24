import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    email : { type : String, required: true, ref: 'User'},
    products : [{
        id : {type : Number, required: true, ref: 'Product'},
        quantity : {type : Number, required: true}
    }],
    totalPrice : {type : Number, required: true, default: 0}
})

const Cart = mongoose.model('Cart', cartSchema)

export {Cart}
