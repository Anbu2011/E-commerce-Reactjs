import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId : { type : mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    orderId : { type : Number, required: true},
    products : [{
        id : {type : mongoose.Schema.Types.Number, required: true, ref: 'Product'},
        quantity : {type : Number, required: true}
    }],
    totalPrice : {type : Number, required: true},
    date : { type : Date, required: true},
})

const Order = mongoose.model('order', orderSchema)

export default Order
