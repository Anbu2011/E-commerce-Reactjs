import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    allCategoryArray : [],
    categoryLoading : false,
}

export const getAllCategory = createAsyncThunk('category/gettingAllCategory', async() =>{
    try{
        const response = await axios.get('http://localhost:3000/api/CategoryData')
        return response.data
    } catch{
        console.error("Api Error", error)
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
