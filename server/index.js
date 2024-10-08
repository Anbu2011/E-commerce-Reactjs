import express from 'express';
import cors from 'cors'
import { connectDB } from './db.js'
import productRoute from './Products/products.route.js'
import userRoute from './User/user.route.js'

const app = express();
const port = 3000;

connectDB()

app.use(cors());
app.use(express.json());

//Routes
app.use('/user', userRoute)
app.use('/product', productRoute)
app.use('/category', )
app.use('/cart', )
app.use('/orders', )


// Global Error Handler
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send({ message: 'Something went wrong!' });
// });



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})

