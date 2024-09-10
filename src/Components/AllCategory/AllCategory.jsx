import React, { useEffect } from 'react'
import "./AllCategory.css"

import {useSelector, useDispatch} from 'react-redux'
import { getAllCategory } from '../../slices/categoryApiSlice'

const AllCategory = () => {

  const dispatch = useDispatch()
  const {allCategoryArray, categoryLoading} = useSelector((state) => state.allCategoryInfo)
  
  useEffect(() => {
    dispatch(getAllCategory())
  }, []);

  
  return (
    <>
      <div>
        <h1>all categories</h1>
      </div>
    </>
  )
}

export default AllCategory