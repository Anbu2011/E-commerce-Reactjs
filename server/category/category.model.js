import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
    name : {type: String, required: true}
})

const Category = mongoose.model('CategoryModel', categorySchema)

export default Category
