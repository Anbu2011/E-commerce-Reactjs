import React, { useEffect } from 'react'
import NavBar from '../NavBar/NavBar.jsx';
import AllCategory from '../AllCategory/AllCategory.jsx';
import RandomProducts from '../RandomProducts/RandomProducts.jsx';
import "./Home.css"

import {useSelector, useDispatch} from 'react-redux'
import { getAllProducts } from '../../slices/productsApiSlice.js'
import { getAllCategory } from '../../slices/categoryApiSlice.js';
import { useNavigate } from 'react-router-dom'


const Home = () => {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getAllProducts())
    dispatch(getAllCategory())
  }, [dispatch]);

  return (
    <>
      <div className='parent'>
        <NavBar />
        <AllCategory />
        <RandomProducts />

      </div>
    </>
  )
}

export default Home