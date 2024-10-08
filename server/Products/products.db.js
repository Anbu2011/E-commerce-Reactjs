import { Product } from "./products.model.js";

// get all products
export const getAllProductsFromDB = async () =>{
    return await Product.find()
}

// get Product By Id
export const getProductByIdFromDB = async (productId) =>{
    return await Product.findById(productId)
}

// create a new product
export const createNewProductInDB = async (ProductData) =>{
    return await Product.create(ProductData)
}

// update a product
export const updateProductInDB = async (ProductId, updateData) =>{
    return await Product.findByIdAndUpdate(ProductId, updateData, {new: true})
}


// delete a product
export const deleteProductInDB = async (productId) =>{
    return await Product.findByIdAndDelete(productId)
}


// seed db with productData.json
export const seedDatabase = async (productData) =>{
    const productLength = await Product.countDocuments();

    if(productLength === 0){
        await Product.insertMany(productData)
        console.log("Products Data added into the DB")
    }
}