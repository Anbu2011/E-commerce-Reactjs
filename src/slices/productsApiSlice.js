import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    allProductArray : [],
    productLoading: false,
}

export const getAllProducts = createAsyncThunk('products/gettingAllProducts', async()=>{
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data
})

export const productSlice = createSlice({
    name: "allProducts",
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder
        .addCase(getAllProducts.pending,(state) =>{
            state.productLoading = true;
        })
        .addCase(getAllProducts.fulfilled,(state,action) =>{
            state.allProductArray = action.payload;
            state.productLoading = false;
        })
        .addCase(getAllProducts.rejected,(state) =>{
            state.productLoading = false;
        })
    }
})


export default productSlice.reducer;