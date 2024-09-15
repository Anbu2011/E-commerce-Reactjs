import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    allProductArray : [],
    productLoading: false,
    cartCount : 0,
    cartArray: [],
    totalPrice : 0
}

export const getAllProducts = createAsyncThunk('products/gettingAllProducts', async()=>{
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data
})

export const productSlice = createSlice({
    name: "allProducts",
    initialState,
    reducers:{
        addCartCount: (state)=>{
            state.cartCount += 1
        },
        reduceCartCount: (state)=>{
            if(state.cartCount > 0){
                state.cartCount -= 1
            }
        },

        addCartArray: (state,action) =>{
            state.cartArray.push({...action.payload, quantity:1})
        },

        removeCartProduct: (state,action) =>{
            let productToBeRemoved = {...action.payload}
            state.cartArray = state.cartArray.filter((each) => each.id !== productToBeRemoved.id)
        },

        addQuantity:(state,action) =>{
            const {productId, quantity} = action.payload;
            const product = state.cartArray.find(each => each.id === productId);
            if(product){
                product.quantity = quantity
            }
        },

        addTotalPrice: (state) =>{
            state.totalPrice = 0
            
            state.cartArray.forEach((each) => {
                state.totalPrice += each.price * each.quantity
            })
        }
    },
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

export const {addCartCount, reduceCartCount, addCartArray, removeCartProduct, addQuantity, addTotalPrice} = productSlice.actions;
export default productSlice.reducer;
