import Product from "./products.model.js";

export const ProductDB = {
    // get all products
    getAllProducts : async () =>{
        return await Product.find()
    },

    // get Product By Id
    getProductById: async (productId) =>{
        return await Product.findOne(productId)
    },

    // create a new product
    createNewProduct: async (newproduct) =>{
        const {id, title, price, description, category, image, rating} = newproduct
        const addNewProduct = new Product({id, title, price, description, category, image, rating})
        return await addNewProduct.save()
    },

    // update a product
    updateProduct: async (productId, updateData) =>{
        return await Product.findOneAndUpdate({id : productId}, updateData, {new: true})
    },

    // delete a product
    deleteProduct: async (productId) =>{
        return await Product.findOneAndDelete({id : productId})
    }
}
