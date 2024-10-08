import mongoose from "mongoose";
import productData from './productsData.json' assert { type : 'json' }
import categoryData from './categoryData.json' assert { type : 'json'}
import { seedDatabase } from "./Products/products.db.js";

const mongoURI = "mongodb+srv://anbuseenuvasan2002:Gjf3FbIsKV7YfCKO@ecommerce-cluster.lluhg.mongodb.net/?retryWrites=true&w=majority&appName=ecommerce-cluster"

//Connecting DB
const connectDB = async () =>{
    try{
        await mongoose.connect(mongoURI);
        console.log('MongoDB Atlas connected successfully')

        await seedDatabase(productData)
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

export { connectDB }