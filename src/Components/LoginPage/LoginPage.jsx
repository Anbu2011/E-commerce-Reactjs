import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar.jsx';
import './LoginPage.css'
import { Navigate, useNavigate } from 'react-router-dom';
import imagePhotoroom from './shopping-cart-image-Photoroom.png'

const LoginPage = () => {

    const navigate = useNavigate()

    const [formInputs, setFormInputs] = useState({
        name : '' ,
        password : ''
    })

    const handleInputChange = (event) => {
        const {name , value} = event.target
        setFormInputs((prevData) => ({...prevData, [name]:value}))
    }
    const handleFormSubmit = (event) =>{
        event.preventDefault(); 
        
        if(formInputs.name === 'anbu' && formInputs.password === 'anbu'){
            localStorage.setItem('isAuthenticated', 'true')
            localStorage.setItem('loginTime', Date.now())
            localStorage.setItem('expiryTime', Date.now() + 1000 * 60 * 15)
            navigate('/home')
        } else{
            alert('Invalid username and password')
        }
    
    }

    const isAuthenticated = localStorage.getItem('isAuthenticated')
        if(isAuthenticated === 'true'){
            return <Navigate to='/home' />
    }
  return (
    <>
        <NavBar />
        <div className='loginPage-parent'>
            <div className='login-image'>
                <p className='welcome-text'>Welcome to the E-Commerce</p>
                <p className='login-description'>Get access to your Orders, Wishlist and Recommendations</p>
                <img src={imagePhotoroom} alt="" className='shopping-cart-login-image'/>
            </div>


            <div className='inputs-parent'>
                <h3 className='login-text '>LOGIN</h3>

                <form onSubmit={handleFormSubmit}>
                    <div className="inputs-child">
                        <input type="name" onChange={handleInputChange} name='name' placeholder='' />
                        <label className='inputs-label' htmlFor="">User Name</label>
                    </div>

                    <div className="inputs-child">
                        <input type="password" onChange={handleInputChange} name='password' placeholder=''/>
                        <label className='inputs-label' htmlFor="">Password</label>
                        <p className='forgot-text'>Forgot Password?</p>
                    </div>
                    
    
                    <button className='login-button'>LOGIN</button>
                </form>
                
            </div>
        </div>

        
        
    </>
  )
}

export default LoginPage