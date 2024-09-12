import React, { useEffect, useState } from 'react'
import "./AllCategory.css"

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AllCategory = () => {
  
  const {allCategoryArray, categoryLoading} = useSelector((state) => state.allCategoryInfo)
  const {allProductArray, productLoading} = useSelector((state) => state.allProductsInfo)
  const navigate = useNavigate()

  const [categoryImage, setCategoryImage] = useState({})
  useEffect(() => {
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
  }, [allProductArray,allCategoryArray]);

  return (
    <>
      <div className='categories-parent'>
        {allCategoryArray.map((each) => (
          <div className='categories'  key={each}>
            <a href="#" key={each.id}>
              <img src={categoryImage[each]} alt={each} className='category-image'/>
              <p className='category-name'>{each}</p>
            </a>
          
          </div>
        ))}
      </div>    
    </>
  )
}

export default AllCategory