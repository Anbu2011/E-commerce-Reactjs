import Category from './category.model'

const getAllCategory = async (req, res) =>{
    const categories = await Category.find()
    res.json(categories)
}

// /categories/:uniqueCategory

export {getAllCategory}