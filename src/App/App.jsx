import {BrowserRouter, Routes, Route} from 'react-router-dom'

import AllProducts from '../Components/AllProducts/AllProducts.jsx'
import AllCategory from '../Components/AllCategory/AllCategory.jsx'
import ErrorRoute from '../Components/ErrorRoute/ErrorRoute.jsx'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllProducts />} />
          <Route path='/categories' element={<AllCategory />} />
          <Route path='*' element={<ErrorRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
