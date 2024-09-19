import React, { useEffect } from 'react'
import NavBar from '../NavBar/NavBar.jsx';
import AllCategory from '../AllCategory/AllCategory.jsx';
import RandomProducts from '../RandomProducts/RandomProducts.jsx';
import "./Home.css"

import {useSelector, useDispatch} from 'react-redux'
import { getAllProducts } from '../../slices/productsApiSlice.js'
import { getAllCategory } from '../../slices/categoryApiSlice.js';


const Home = () => {
  const {allProductArray, productLoading} = useSelector((state) => state.allProductsInfo)
  const {allCategoryArray} = useSelector((state) => state.allCategoryInfo)
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    if(! allProductArray.length){
      dispatch(getAllProducts())
    }
    if(! allProductArray.length){
      dispatch(getAllCategory())
    }
    
  }, [dispatch,allProductArray.length,allCategoryArray.length]);

  if(productLoading){
    return <p className='loading'>Loading...</p>
  }

  return (
    <>
      <div>
        <AllCategory />
        <RandomProducts />

      </div>
    </>
  )
}

export default Home