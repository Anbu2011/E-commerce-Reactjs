import { ProductService } from "./products.service";


//get all products
export const getAllProducts = asyncErrorHandler(async (req, res, next) =>{
    const products = await ProductService.getAll()
    res.status(200).json({success: true, data: products})
});
//get product by ID
export const getProductById = asyncErrorHandler(async (req, res, next) =>{
    const product = await ProductService.getProductById(req.body)
    res.status(200).json({success: true, data: product})
})

//create new product
export const createNewProduct = asyncErrorHandler(async (req, res, next) =>{
    const product = await ProductService.create(req.body)
    res.status(200).json({success: true, data: product})
});

//update product
export const updateProduct = asyncErrorHandler(async (req, res, next) =>{
    const product = await ProductService.update(req.body)
    res.status(200).json({success: true, data: product})
});

//delete product
export const deleteProduct = asyncErrorHandler(async (req, res, next) =>{
    await ProductService.delete(req.body.id)
    res.status(200).json({success: true, message: 'product deleted'})
});
