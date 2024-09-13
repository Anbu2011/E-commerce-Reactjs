import React, { useEffect } from 'react'
import NavBar from '../NavBar/NavBar';
import './IndividualCategory.css'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../slices/productsApiSlice';
import { getAllCategory } from '../../slices/categoryApiSlice';
import { Link, useParams } from 'react-router-dom';



const IndividualCategory = () => {
  const dispatch = useDispatch()
  const {allProductArray} = useSelector((state) => state.allProductsInfo)
  const {allCategoryArray} = useSelector((state) => state.allCategoryInfo)

  useEffect(() => {
    dispatch(getAllProducts())
    dispatch(getAllCategory())
  }, [dispatch]);

  const {uniqueCategory} = useParams()

  const specificCategory = allProductArray.map((product) =>{
    if(product.category === uniqueCategory){
      return product
    }
  }) .filter((product)=>{
    if(product!==undefined){
      return product
    }
  })
  // console.log(specificCategory)

  return (
    <>
      <NavBar />
      <div className='grid-container-parent'>
        {specificCategory.map((categoryProduct) =>(
          <div className="grid-child">
            <Link to={`/productdetails/${categoryProduct.id}`}>
              <a href="#">
                <img src={`${categoryProduct.image}`} alt="" className='grid-image'/>
                <p className='title'>{categoryProduct.title}</p>
                <p>₹{categoryProduct.price}</p>
              </a>
            </Link>
            
          </div>
        ))}
      </div>
        
    </>
  )
}

export default IndividualCategory