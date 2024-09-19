import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const ProtectRoutes = ({ children }) => {
  const navigate = useNavigate()
  
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem('isAuthenticated') === 'true')
  const [expiring , setExpiring] = useState(false)
  
  
  useEffect(() => {
    const checkSessionExpiration = () => {
      const expiryTime = localStorage.getItem('expiryTime')
      if(expiryTime){
        const currentTime = Date.now()
        if(currentTime > parseInt(expiryTime,10)){
          localStorage.setItem('isAuthenticated', 'false')
          localStorage.removeItem('loginTime')
          localStorage.removeItem('expiryTime')
          alert('Your Session has expired. Please login again')
          setIsAuthenticated(false)
          setExpiring(true)
        
        }
      }
    }
    checkSessionExpiration()
  }, []);
  if(expiring){
    return <Navigate to='/login' />
  }
  return isAuthenticated ? children : <Navigate to='/login' />
}

export default ProtectRoutes