import React, { useEffect, useState } from 'react'
import "./AllCategory.css"

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const AllCategory = () => {
  
  const {allCategoryArray} = useSelector((state) => state.allCategoryInfo)
  const {allProductArray} = useSelector((state) => state.allProductsInfo)

  const [categoryImage, setCategoryImage] = useState({})
  
  const updateCategoryImages = () => {
    if(allCategoryArray.length > 0 && allProductArray.length > 0){
      const categoryImageMap = {};

      allCategoryArray.forEach((category) =>{
        categoryImageMap[category.name] = null;
      })

      allProductArray.forEach((product)=>{
        if(categoryImageMap[product.category] === null){
          categoryImageMap[product.category] = product.image
        }
      })
      setCategoryImage(categoryImageMap)
    }
  };
  useEffect(() => {
    if(! categoryImage.length){
      updateCategoryImages()
    }
    
  }, [allProductArray, allCategoryArray, categoryImage.length]);
  
  return (
    <>
      <div className='categories-parent'>
        {allCategoryArray.map((category) => (
          <div className='categories' >
            <Link to={`/categories/${category.name}`}>
              <a href="">
                <img src={categoryImage[category.name]} alt={category.name} className='category-image'/>
                <p className='category-name'>{category.name}</p>
              </a>
            </Link>
          </div>
        ))}
      </div>    
    </>
  )
}

export default AllCategory