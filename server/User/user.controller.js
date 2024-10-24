import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {UserService} from './user.service.js'

const JWT_secretKey = 'HVA@2024'
//Register
export const registerUser = async (req, res, next) =>{
    const  {username, password, fullname, email, phoneNumber} =  req.body;
    const hashedPassword = await bcryptjs.hash(password, 10);

    try {
        const alreadyUser = await UserService.getUser(username)
        if(alreadyUser){
            return res.status(404).json({ message : 'User registered already '})
        }
        const newUser = {username, password : hashedPassword, fullname, email, phoneNumber}
        await UserService.createUser(newUser)
        
        const token = jwt.sign({username, email}, JWT_secretKey, { expiresIn : '1h'})
        
        res.status(201).json({ message: 'user registered successfully', token})
    } catch (error) {
        res.status(500).json({success: false, message: 'Server error', error: error.message})
        
    }
}

//Login
export const loginUser = async (req, res, next) =>{
    
    const {username, password} = req.body;
    // const hashedPassword = await bcryptjs.hash(password, 10);
    
    try {
        const alreadyUser = await UserService.getUser(username)
        if(!alreadyUser){
            return res.status(404).json({ message : 'User Not Found, Please register'})
        }
        
        const isPasswordValid = await bcryptjs.compare(password, alreadyUser.password)
        if(!isPasswordValid){
            return res.status(400).json({message: 'username or password is incorrect'})
        }
        
        const token = jwt.sign({username, email: alreadyUser.email}, JWT_secretKey, { expiresIn : '1h'})
        
        res.status(201).json({ message: 'user login successfully', token})

    } catch (error) {
        res.status(500).json({success: false, message: 'Server error', error: error.message})
    }
}
