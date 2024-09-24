import { HashRouter, Routes, Route } from 'react-router-dom'

import LoginPage from '../Components/LoginPage/LoginPage.jsx'
import ProtectRoutes from '../Components/ProtectRoutes/ProtectRoutes.jsx'
import ProtectedLayout from '../Components/ProtectedLayout/ProtectedLayout.jsx'
import Home from '../Components/Home/Home.jsx'
import ProductDetails from '../Components/ProductDetails/ProductDetails.jsx'
import IndividualCategory from '../Components/IndividualCategory/IndividualCategory.jsx'
import Cart from '../Components/Cart/Cart.jsx'
import MyOrders from '../Components/MyOrders/MyOrders.jsx'
import ErrorRoute from '../Components/ErrorRoute/ErrorRoute.jsx'
import './App.css'

function App() {
  
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route 
            path='/' 
            element={
              <ProtectRoutes>
                <ProtectedLayout />
              </ProtectRoutes>
            }
          >
            <Route path='/home' element={<Home />} />
            <Route path='/productdetails/:Id' element={<ProductDetails />} />
            <Route path='/categories/:uniqueCategory' element={<IndividualCategory />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/myOrders' element={<MyOrders />} />
            
          </Route>
          <Route path='*' element={<ErrorRoute />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
