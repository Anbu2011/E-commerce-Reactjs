import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    allCategoryArray : [],
    categoryLoading : false,
}

export const getAllCategory = createAsyncThunk('category/gettingAllCategory', async(_, {rejectWithValue}) =>{
    try{
        const response = await axios.get('https://fakestoreapi.com/products/categories')
        return response.data
    } catch{
        console.error("Api Error", error)
        // return rejectWithValue(error.response.data);
    }
})

export const categorySlice = createSlice({
    name:'allCategory',
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder
        .addCase(getAllCategory.pending, (state) =>{
            state.categoryLoading = true;
        })
        .addCase(getAllCategory.fulfilled, (state,action) =>{
            state.allCategoryArray = action.payload;
            state.categoryLoading = false;
        })
        .addCase(getAllCategory.rejected, (state) =>{
            state.categoryLoading = false;
        })
    }
})

export default categorySlice.reducer;
