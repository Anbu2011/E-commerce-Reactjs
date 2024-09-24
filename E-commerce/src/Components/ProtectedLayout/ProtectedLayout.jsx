import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'

const ProtectedLayout = () => {

  return (
    <>
      <div id='protectedLayout'>
        <NavBar />
        <div id='protectedlayout-outlet'>
          <Outlet />
        </div>
        
      </div>
        
    </>
  )
}

export default ProtectedLayout