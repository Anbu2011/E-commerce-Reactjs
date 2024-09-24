import express from 'express';
import cors from 'cors'
import productData from './productsData.json' assert { type : 'json' }
import categoryData from './categoryData.json' assert { type : 'json'}

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Welcome to the API. Access ProductsData at http://localhost:3000/api/ProductsData and CategoryData at http://localhost:3000/api/CategoryData')
})
app.get('/api/ProductsData', (req , res) =>{
    res.json(productData)
})
app.get('/api/CategoryData', (req, res) =>{
    res.json(categoryData)
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})