import React from 'react'
import './NavBar.css'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const NavBar = () => {

    const cartCount = useSelector((state) => state.allProductsInfo.cartCount)

  return (
    <>
        <div className='nav-parent'>
        
            <div className='logo'>
                <h2 className='logo-name'>E Commerce</h2>
                <p className='logo-name explore-products'>Explore Products</p>
            </div>
        
            <div className='search-bar'>
                <SearchIcon className='search-icon'/>
                <input type="text" className="search-input" placeholder='Search for Products and More'/>
            </div>

            <Link to='/cart'>
                <div className='cart'>
                    <AddShoppingCartIcon />
                    <p className='cart-name'>Cart</p>
                    <p className='cart-count'>{cartCount}</p>  
                </div>
            </Link>

            <div className='goto-admin'>
                <AdminPanelSettingsIcon />
                <p>Go-To Admin</p>
            </div>
        </div>
    </>
  )
}

export default NavBar