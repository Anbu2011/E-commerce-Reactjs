import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar.jsx'
import './ProductDetails.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addCartArray, addCartCount, getAllProducts } from '../../slices/productsApiSlice.js'

import StarsIcon from '@mui/icons-material/Stars';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const ProductDetails = () => {
    
    const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(getAllProducts())
    // }, [dispatch]);
    
    const {allProductArray} = useSelector((state) => state.allProductsInfo)
    const {cartArray} = useSelector((state) => state.allProductsInfo)

    const {Id} = useParams()
    const specificProduct = allProductArray.find((product) =>{
        if(product.id === Number(Id)){
            return product
        }
    })

    const [cartError , setCartError] = useState('')
    const handleCartClick = (newCartProduct) =>{

        const alreadyAddedToCart = cartArray.find((each) => each.title === newCartProduct.title)
        if(!alreadyAddedToCart){
            dispatch(addCartCount());
            dispatch(addCartArray(newCartProduct))
        } else{
            setCartError("This Product is already added to the cart. If you want to add more on this, please increase the Quantity")
        }
    }

  return (
    <>
        <div>
            {/* <NavBar /> */}
            {specificProduct && 
                <div className='each-product-parent'>
                    <div className='each-product-image'>
                        <img src={`${specificProduct.image}`} alt="" className='product-image'/>
                    </div>
                    
                    <div className='content'>
                        <div>
                            <p className='content-title'>{specificProduct.title}</p>

                            <div className="rating-parent">
                                <StarsIcon className='rating-icon'/>
                                <p className='content-rating'>{specificProduct.rating.rate} Rating & </p>
                                <p className='rating-count'>{specificProduct.rating.count} Reviews</p>
                            </div>
                        </div>

                        <div className='content-price'>
                            <label htmlFor="" className='content-label'>Special price </label>
                            <p className='price'>₹{specificProduct.price}</p>
                        </div>
                        
                        <div className='description-parent'>
                            <label htmlFor="" className='description-label'>Description</label>
                            <p className='description'>{specificProduct.description}</p>
                        </div>

                        {cartError && <p style={{color:'red'}}>{cartError}</p>}

                        <button onClick={() => handleCartClick(specificProduct)} className='cart-button'>
                            <AddShoppingCartIcon className='button-cart-icon' />
                            <label htmlFor="" className='cart-button-label'>ADD TO CART</label>
                        </button>
                        
                    </div>
                    
                </div>
            }

        </div>
        
    </>
  )
}

export default ProductDetails