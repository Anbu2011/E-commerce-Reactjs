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
        categoryImageMap[category] = null;
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
            <Link to={`/categories/${category}`}>
              <a href="">
                <img src={categoryImage[category]} alt={category} className='category-image'/>
                <p className='category-name'>{category}</p>
              </a>
            </Link>
          </div>
        ))}
      </div>    
    </>
  )
}

export default AllCategory