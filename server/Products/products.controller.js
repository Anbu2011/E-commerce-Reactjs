import  {ProductService}  from "./products.service.js";


//get all products
export const getAllProducts = async (req, res, next) =>{
    const products = await ProductService.getAll()
    res.status(200).json({success: true, data: products})
};

//get product by ID
export const getProductById = async (req, res, next) =>{
    const productId = req.params.id
    try {
        const product = await ProductService.getProductById(productId)
        if(!product){
            return res.status(404).json({success: false, message: 'Product not found'})
        }
        res.status(200).json({success: true, data: product})
        
    } catch (error) {
        res.status(500).json({success: false, message: 'Server error', error: error.message})
    }
};

//create new product
export const createNewProduct = async (req, res, next) =>{
    const {id, title, price, description, category, image, rating} = req.body
    const {rate, count} = rating
    
    try {
        if(!id || !title || !price || !description || !category || !image || !rate || !count){
            return res.status(400).json({success: false, message: 'All fields are required'})
        }
        const existingProduct = await ProductService.getProductById(id)
        if(existingProduct){
            return res.status(400).json({success: false, message: 'Product Id must be unique'})
        }
        const product = await ProductService.create(req.body)
        res.status(200).json({success: true, data: product})
    } catch (error) {
        res.status(500).json({success: false, message: 'Server error', error: error.message})
    }

};

//update product
export const updateProduct = async (req, res, next) =>{
    const productId = req.body.id
    try {
        const updatedProduct = await ProductService.update(productId, req.body)

        if(!updatedProduct){
            return res.status(404).json({success: false, message: 'Product not found to update'})
        }
        res.status(200).json({success: true, data: updatedProduct})
    } catch (error) {
        res.status(500).json({success: false, message: 'Server error', error: error.message})
    }
};

//delete product
export const deleteProduct = async (req, res, next) =>{
    
    const productId = req.params.id
    try {
        const deletedProduct = await ProductService.delete(productId)

        if(!deletedProduct){
            return res.status(404).json({success: false, message: 'Product not found to delete'})
        }
        
        res.status(200).json({success: true, message: 'Product Deleted'})
    } catch (error) {
        res.status(500).json({success: false, message: 'Server error', error: error.message})
    }
};
