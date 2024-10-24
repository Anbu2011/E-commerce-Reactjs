import jwt from "jsonwebtoken";

const JWT_secretKey = 'HVA@2024'

export const verifyToken = (req, res, next) =>{
    const token = req.headers['authorization']?.split(' ')[1]

    if(!token){
        return res.status(401).json({ success: false, message: 'Access denied. No token provided.' })
    }

    try {
        const decoded = jwt.verify(token, JWT_secretKey)
        // req.user = decoded
        next()
    } catch (error) {
        return res.status(400).json({ success: false, message: 'Invalid token.' })
    }
}
