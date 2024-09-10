import React, { useEffect } from 'react'
import NavBar from '../NavBar/NavBar.jsx';
import "./AllProducts.css"

import {useSelector, useDispatch} from 'react-redux'
import { getAllProducts } from '../../slices/productsApiSlice.js'


const AllProducts = () => {
  
  const dispatch = useDispatch()
  const {allProductArray, productLoading} = useSelector((state) => state.allProductsInfo)

  useEffect(() => {
    dispatch(getAllProducts())
  }, []);

  return (
    <>
      <NavBar />
    </>
  )
}

export default AllProducts