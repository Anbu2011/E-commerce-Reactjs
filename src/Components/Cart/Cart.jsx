import React, { useEffect, useState } from 'react'
import NavBar from '../NavBar/NavBar'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StarsIcon from '@mui/icons-material/Stars';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { addQuantity, addTotalPrice, reduceCartCount, removeCartProduct } from '../../slices/productsApiSlice';

const Cart = () => {

  const dispatch = useDispatch()
  const cartArray = useSelector((state)=> state.allProductsInfo.cartArray)
  const totalPrice = useSelector((state)=> state.allProductsInfo.totalPrice)

  const handleRemoveProduct = (removeProduct) =>{
    dispatch(removeCartProduct(removeProduct))
    dispatch(reduceCartCount())
  }

  useEffect(() => {
    dispatch(addTotalPrice())
  }, [cartArray, dispatch]);

  const handleQuantityChange = (event, productId) =>{
    const newQuantity = Math.max(Number(event.target.value) , 1)
    dispatch(addQuantity({ productId, quantity: newQuantity}))
  }

  return (
    <>
      <div className='your-cart-parent'>
        <AddShoppingCartIcon />
        <h2 className='h2-your-cart'>YOUR CART</h2>
      </div>
      
      <div className='content-priceDetails'>
        <div className='cart-products-content'>
          {cartArray && cartArray.length>0 ? (cartArray.map((eachCartProduct) =>(
              <div className='cart-parent'>
                <div className='cart-image-parent'>
                  <img src={`${eachCartProduct.image}`} alt="" className='cart-image'/>
                </div>
                
                <div className='cart-content'>
                  <div>
                    <p className='cart-content-title'>{eachCartProduct.title}</p>

                    <div className="cart-rating-parent">
                      <StarsIcon />
                      <p className='cart-content-rating'>{eachCartProduct.rating.rate} Rating &</p>
                      <p className='cart-rating-count'>{eachCartProduct.rating.count} Reviews</p>
                    </div>
                  </div>
                  
                  <div className='cart-content-price'>
                    <label htmlFor="" className='cart-content-label'>Special price </label>
                    <p className='cart-price'>₹{eachCartProduct.price}</p>
                  </div>
                  
                  <div className='cart-quantity-parent'>
                    <label htmlFor="" className='quantity-label'>Quantity </label>
                    <input type="number" value={eachCartProduct.quantity > 1 ? eachCartProduct.quantity : 1} 
                           onChange={(event) => handleQuantityChange(event, eachCartProduct.id)}  className='quantity-input'/>
                  </div>

                  <button onClick={() => handleRemoveProduct(eachCartProduct)} className='remove-cartButton-parent'>
                    <RemoveShoppingCartIcon className='removebutton-cart-icon'/>
                    <label htmlFor="" className='removecart-button-label'>Remove From Cart</label>
                  </button>
                  
                </div>

              </div>
          )) ) : (<div className='empty-cart-parent'>
                    <div>
                      <p>Your Cart is Empty !! </p>
                      <p>Please Choose a Product and Add it to Cart</p>
                    </div>
                  </div>)
          }
        </div>
        <div className='cart-products-price'>
          {cartArray && cartArray.length > 0 ? 
            ( <>
                <div className='price-details-parent'>
                  <p className='price-ptag'>PRICE DETAILS</p>

                  <div className='price-details-child'>
                    <div className='allprice-details'>
                      <label className='price-details-label' htmlFor="">Price ({cartArray.length} Items)</label>
                      <p className='price-details-ptag'> ₹{totalPrice.toFixed(2)}</p>
                    </div>

                    <div className='allprice-details'>
                      <label className='price-details-label' htmlFor="">Platform Fee</label>
                      <p className='price-details-ptag'>₹3.00</p>
                    </div>
                    <div className='allprice-details'>
                      <label className='price-details-label' htmlFor="">Delivery Charges</label>
                      <p className='price-details-ptag'>₹40.00</p>
                    </div>
                    
                    <div className='allprice-details total-Amount'>
                      <label className='price-details-label' htmlFor="">Total Amount</label>
                      <p className='price-details-ptag'> ₹{(totalPrice+40+3).toFixed(2)}</p>
                    </div>
                  </div>
                </div>

                <div className='order-button-parent'>
                  <button className='place-order-button'>
                    <label htmlFor="" className='placeOrder-button-label'>PLACE ORDER</label>
                  </button>
                </div>
                
              </>
            ) : ( null)
          }
        </div>
      </div>
    </> 
  )
}

export default Cart