import {ProductDB} from './products.db.js'

export const ProductService = {
    getAll : async () =>{
        return await ProductDB.getAllProducts()
    },

    getProductById: async (productId) => {
        return await ProductDB.getProductById({id : productId})
    },

    create : async (newProduct) =>{
        return await ProductDB.createNewProduct(newProduct);
    },

    update : async (productId, updateData) =>{
        return await ProductDB.updateProduct(productId, updateData)
    },

    delete : async (productId) =>{
        return await ProductDB.deleteProduct(productId)
    }
}