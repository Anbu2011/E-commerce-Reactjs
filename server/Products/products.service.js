import { ProductDB} from './products.db.js'

export const ProductService = {
    getAll : async () =>{
        return await ProductDB.getAllProductsFromDB()
    },

    getProductById: async (productId) => {
        ProductDB.getProductByIdFromDB(productId)
    },

    create : async (data) =>{
        const product = new ProductDB.createNewProductInDB(data);
        return await product.save()
    },

    update : async (data) =>{
        return await ProductDB.updateProductInDB({id: data.id}, data)
    },

    delete : async (id) =>{
        return await ProductDB.deleteProductInDB(id)
    }
}