import express from 'express';
import cors from 'cors'

import { Product, Category, connectDB } from './db.js'

const app = express();
const port = 3000;

connectDB()

app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Welcome to the API. Access ProductsData at http://localhost:3000/api/ProductsData and CategoryData at http://localhost:3000/api/CategoryData')
})

app.get('/api/ProductsData', async (req , res) =>{
    try{
        const products = await Product.find()
        res.json(products)
    } catch (error) {
        res.status(500).json({ message : 'Error fetching products data'})
    }
})

app.get('/api/CategoryData', async (req, res) =>{
    try{
        const categories = await Category.find()
        res.json(categories)
    } catch (error){
        res.status(500).json({ message : 'Error fetching category data'})
    }
    
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})