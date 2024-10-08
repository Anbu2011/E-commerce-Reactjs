import User from "./user.model"
import bcryptjs from 'bcryptjs'

//Register
const registerUser = async (req, res) =>{
    const  {userId, username, password, fullname, email, phoneNumber, isAdmin} =  req.body;
    const hashedPassword = await bcryptjs.hash(password, 10);

    const user = new User({ userId, username, hashedPassword, fullname, email, phoneNumber, isAdmin })
    await user.save();

    res.status(201).json({ message: 'user registered successfully'})
}

//Login
const loginUser = async (req, res) =>{
    const {username, password} = req.body;

    const user = await User.findOne({ username });

    if(!user || (!await bcryptjs.compare(password, user.password))){
        return res.status(201).jsong({ message : 'username or password is incorrect'})
    }
}

export {registerUser, loginUser}

