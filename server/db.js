import mongoose from "mongoose";
import productData from './productsData.json' assert { type : 'json' }
import categoryData from './categoryData.json' assert { type : 'json'}

const mongoURI = "mongodb+srv://anbuseenuvasan2002:Gjf3FbIsKV7YfCKO@ecommerce-cluster.lluhg.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce-cluster"

//Schema's
const productSchema = new mongoose.Schema({
    id : {type: Number, required: true},
    title : {type: String, required: true},
    price : {type: Number, required: true},
    description : {type: String, required: true},
    category : {type: String, required: true},
    image : {type: String, required: true},
    rating : {
        rate : {type: Number, required: true},
        count : {type: Number, required: true}
    }
})

const categorySchema = new mongoose.Schema({
    name : {type: String, required: true}
})

//Models
const Product = mongoose.model('ProductModel', productSchema);
const Category = mongoose.model('CategoryModel', categorySchema)

//Connecting DB
const connectDB = async () =>{
    try{
        await mongoose.connect(mongoURI);
        console.log('MongoDB Atlas connected successfully')

        await seedDatabase()
    } catch (error) {
        console.error('Error connecting to MongoDB Atlas', error.message)
        process.exit(1)
    }
}

//Adding data to the DB
const seedDatabase = async () =>{
    const productLength = await Product.countDocuments();
    const categoryLength = await Category.countDocuments();

    if(productLength === 0){
        await Product.insertMany(productData)
        console.log("Products Data added into the DB")
    }

    if(categoryLength === 0){
        const formattedCategoriesData = categoryData.map(category => ({'name' : category}))
        await Category.insertMany(formattedCategoriesData)
        console.log("Category Data added into the DB")
    }
}

export { Product , Category , connectDB }