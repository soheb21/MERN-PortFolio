const jwt = require("jsonwebtoken");
const UserModel = require("../model/userModel");
const isAuth = async (req, res, next) => {
    try {
        const token = req.headers["authorization"].split(" ")[1];
        if (!token) {
            return res.status(400).json({
                success: false,
                message: "User not Authenticated!"
            })
        }
        jwt.verify(token, process.env.SECRET_JWT, async (err, decoded) => {
            if (err) {
                return res.status(500).json({
                    success: "false",
                    message: "Auth method",
                })
            }
            console.log("idd", decoded)
            req.user = decoded.id
            next();
        })

    } catch (e) {
        console.log("Authentication Error:", e)
        res.status(501).json({ success: false, message: "Internal Server Error" });

    }
}
module.exports = isAuth