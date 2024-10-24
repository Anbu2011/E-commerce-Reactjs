import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    // userId : { type : Number, required: true, unique: true},
    username : { type : String, required: true, unique: true},
    password : { type : String, required: true},
    fullname : { type : String, required: true},
    email : { type : String, required: true, unique: true},
    phoneNumber : { type : Number, required: true},
    // isAdmin : { type : Boolean, default: false},
})

const User = mongoose.model('user', userSchema)

export default User
