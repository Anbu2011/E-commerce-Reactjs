import {UserDB} from "./user.db.js"

export const UserService = {
    getUser : async (username) =>{
        return await UserDB.getUser(username)
    },

    createUser : async (newUser) =>{
        return await UserDB.createUser(newUser)
    }
}