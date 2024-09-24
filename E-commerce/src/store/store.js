import { configureStore } from '@reduxjs/toolkit'
import allProductReducer from '../slices/productsApiSlice.js'
import allCategoryReducer from '../slices/categoryApiSlice.js'

const store = configureStore({
    reducer:{
        allProductsInfo : allProductReducer,
        allCategoryInfo : allCategoryReducer,
    }
})

export {store};