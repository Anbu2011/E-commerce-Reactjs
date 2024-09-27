import React from 'react'
import './NavBar.css'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import LogoutIcon from '@mui/icons-material/Logout';

import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { addSearchInput } from '../../slices/productsApiSlice';


const NavBar = () => {

    const cartCount = useSelector((state) => state.allProductsInfo.cartCount)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogoutClick = () =>{
        localStorage.setItem('isAuthenticated', 'false')
        localStorage.removeItem('loginTime')
        localStorage.removeItem('expiryTime')
        navigate('/login')
    }


    const handleSearchInput = (event) =>{
        event.preventDefault()
        dispatch(addSearchInput(event.target.value))
    }

  return (
    <>
        <div className='nav-parent'>
        
            <div className='logo'>
                <h2 className='logo-name'>E Commerce</h2>
                <p className='logo-name explore-products'>Explore Products</p>
            </div>
        
            <div className='search-bar'>
                <SearchIcon className='search-icon'/>
                <input type="text" onChange={handleSearchInput} className="search-input" placeholder='Search for Products and More'/>

            </div>

            <Link to='/cart'>
                <div className='cart'>
                    <AddShoppingCartIcon />
                    <p className='cart-name'>Cart</p>
                    <p className='cart-count'>{cartCount}</p>  
                </div>
            </Link>

            <Link to='/myOrders'>
                <div className='my-orders-parent'>
                    <ShoppingBagIcon className='my-orders-icon'/>
                    <p className='my-orders-name'>My Orders</p>
                </div>
            </Link>

            <div className='goto-admin'>
                <AdminPanelSettingsIcon />
                <p>Go-To Admin</p>
            </div>

            <button onClick={handleLogoutClick} className='logout-button-parent'>
                <LogoutIcon className='logout-icon'/>
                <p>Logout</p>
            </button>
                
        </div>
    </>
  )
}

export default NavBar