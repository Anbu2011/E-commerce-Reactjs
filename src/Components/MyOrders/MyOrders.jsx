import React from 'react'
import './MyOrders.css'
import StarsIcon from '@mui/icons-material/Stars';
import { useSelector } from 'react-redux'

const MyOrders = () => {
    const ordersArray = useSelector((state) => state.allProductsInfo.ordersArray)

    // console.log(ordersArray)
  return (
    <>
        <p className='your-orders'>YOUR ORDERS</p>
        {ordersArray.length === 0 ? (
            <p className='no-orders'>No orders yet!!</p>
        ) : (
            ordersArray.map((eachOrder, orderIndex) => (
                <> 
                    
                    <div className='each-order-parent'>
                        <p className='order-placed'>Order Placed ✅</p>
                        <p className='order-id'>Order Id - {orderIndex + 1}</p>
                        <p className='total-price'>Total Price - {eachOrder.totalPrice.toFixed(2)}</p>
                        
                        {eachOrder.products.map((product, productIndex) => (
                            <>
                                <div className='order-parent'>
                                    <div className='order-image-parent'>
                                        <img src={product.image} alt="" className='order-image'/>
                                    </div>
                                    
                                    <div className='order-content'>
                                        <div>
                                            <p className='order-content-title'>{product.title}</p>

                                            <div className="order-rating-parent">
                                            <StarsIcon />
                                            <p className='order-content-rating'>{product.rating.rate} Rating &</p>
                                            <p className='order-rating-count'>{product.rating.count} Reviews</p>
                                            </div>
                                        </div>
                                    
                                        <div className='order-content-price'>
                                            <label htmlFor="" className='order-content-label'>Price </label>
                                            <p className='order-price'>₹{product.price}</p>
                                        </div>
                    
                                        <div className='order-quantity-parent'>
                                            <label htmlFor="">Quantity - </label>
                                            <p className='order-quantity-number'>{product.quantity}</p>
                                        </div>
                                    
                                    </div>

                                </div>
                            </>
                        ))}
                    </div>
                </>
                
                
            ))
        )}
    </>
  )
}

export default MyOrders 