import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from '../Components/Home/Home.jsx'
import ProductDetails from '../Components/ProductDetails/ProductDetails.jsx'
import IndividualCategory from '../Components/IndividualCategory/IndividualCategory.jsx'
import Cart from '../Components/Cart/Cart.jsx'
import ErrorRoute from '../Components/ErrorRoute/ErrorRoute.jsx'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/productdetails/:Id' element={<ProductDetails />} />
          <Route path='/categories/:uniqueCategory' element={<IndividualCategory />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<ErrorRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
