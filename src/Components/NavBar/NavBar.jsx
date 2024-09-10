import React from 'react'
import './NavBar.css'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const NavBar = () => {
  return (
    <>
        <div className='nav-parent'>
        
            <div className='logo'>
                <h2 className='logo-name'>E Commerce</h2>
                <p className='logo-name explore-products'>Explore Products</p>
            </div>
        
            <div className='search-bar'>
                <SearchIcon className='search-icon'/>
                {/* <FontAwesomeIcon icon={faSearchengin} className='search-icon'/> */}
                <input type="text" className="search-input" placeholder='Search for Products and More'/>
            </div>

            <div className='cart'>
                {/* <FontAwesomeIcon icon={faCartShopping} className='cart-icon'/> */}
                <AddShoppingCartIcon className='cart-icon' />
                <p className='cart-name'>Cart</p>
            </div>

            <div className='goto-admin'>
                <AdminPanelSettingsIcon />
                <p>Go-To Admin</p>
            </div>
        </div>
    </>
  )
}

export default NavBar