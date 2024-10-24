import User from './user.model.js'

export const UserDB = {
    getUser : async (username) =>{
        return await User.findOne({username})
    },

    createUser : async (newUser) =>{
        const {username, password, fullname, email, phoneNumber} = newUser
        const addNewUser = new User({username, password, fullname, email, phoneNumber})
        return await addNewUser.save();

    }
}