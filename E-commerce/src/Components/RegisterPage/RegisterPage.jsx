import React, { useState } from 'react'
import './RegisterPage.css'
import NavBar from '../NavBar/NavBar'
import { Navigate, useNavigate } from 'react-router-dom'
import imagePhotoroom from '../LoginPage/shopping-cart-image-Photoroom.png'

const RegisterPage = () => {

    const navigate = useNavigate()

    const [formInputs, setFormInputs] = useState({
        fullName : '',
        userName : '' ,
        password : '',
        email : '',
        phoneNo : '',
    })

    const handleInputChange = (event) => {
        const {name , value} = event.target
        setFormInputs((prevData) => ({...prevData, [name]:value}))

    }
    const handleFormSubmit = (event) =>{
        event.preventDefault(); 
        if(!formInputs.userName || !formInputs.password || !formInputs.email || !formInputs.phoneNo || !formInputs.fullName){
            alert('Please fill all the inputs!!')
        } else{
            navigate('/login')
        }

        // if(formInputs.name === 'anbu' && formInputs.password === 'anbu'){
        //     localStorage.setItem('isAuthenticated', 'true')
        //     localStorage.setItem('loginTime', Date.now())
        //     localStorage.setItem('expiryTime', Date.now() + 1000 * 60 * 15)
        //     navigate('/login')
        // } else{
        //     alert('Please fill the details')
        // }
    
    }

    // const isAuthenticated = localStorage.getItem('isAuthenticated')
    //     if(isAuthenticated === 'true'){
    //         return <Navigate to='/home' />
    // }

    const handleLoginButtonClick =  () =>{
        navigate('/login')
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
                <h3 className='login-text '>REGISTER</h3>

                <form onSubmit={handleFormSubmit}>
                    <div className="inputs-child">
                        <input type="text" onChange={handleInputChange} name='fullName' placeholder='' />
                        <label className='inputs-label' htmlFor="">Full Name</label>
                    </div>

                    <div className="inputs-child">
                        <input type="text" onChange={handleInputChange} name='userName' placeholder='' />
                        <label className='inputs-label' htmlFor="">User Name</label>
                    </div>

                    <div className="inputs-child">
                        <input type="email" onChange={handleInputChange} name='email' placeholder='' />
                        <label className='inputs-label' htmlFor="">E-Mail</label>
                    </div>

                    <div className="inputs-child">
                        <input type="tel" onChange={handleInputChange} name='phoneNo' placeholder='' />
                        <label className='inputs-label' htmlFor="">Phone Number</label>
                    </div>

                    <div className="inputs-child">
                        <input type="password" onChange={handleInputChange} name='password' placeholder=''/>
                        <label className='inputs-label' htmlFor="">Password</label>
                    </div>
                    
    
                    <button className='login-button'>REGISTER</button>

                    <button type='button' onClick={handleLoginButtonClick} className='login-button'>LOGIN</button>
                </form>
                
            </div>
        </div>

    </>
  )
}

export default RegisterPage