import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    userId : { type : mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    // cartId : { type: Number, required: true},
    products : {
        id : {type : mongoose.Schema.Types.Number, required: true, ref: 'Product'},
        quantity : {type : Number, required: true}
    },
    totalPrice : {type : Number, required: true, default: 0}
})

const Cart = mongoose.model('cart', cartSchema)

export {Cart}