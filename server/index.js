import express from 'express';
import cors from 'cors'
import { connectDB } from './db.js'
import productRoute from './Products/products.route.js'
import userRoute from './User/user.route.js'
import CartRoute from './Cart/cart.route.js'

const app = express();
const port = 3000;

connectDB()
// const connect = async () =>{
//     await connectDB()
// }

app.use(cors());
app.use(express.json());

//Routes
app.use('/user', userRoute)
app.use('/product', productRoute)
// app.use('/category', )
app.use('/cart', CartRoute)
// app.use('/orders', )


// Global Error Handler
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send({ message: 'Something went wrong!' });
// });

// connectDB().then( ()=>{
//     app.listen(port, () => {
//         console.log(`Server is running on http://localhost:${port}`)
//     })
    
// }).catch(()=>{
//     console.error('db failed', error.message)
// })

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})

