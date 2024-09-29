const UserModel = require("../model/userModel")
const { errorMssg, succcessMssg } = require("../utils/messages")

const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return errorMssg(400, "Provide Email and Password", false, res)
        }
        const existingUser = await UserModel.findOne({ email }).select("+password")
        if (existingUser) {
            return errorMssg(404, "User Already Present", false, res)

        }
        const user = await UserModel.create({ username, email, password });
        const token = user.generateToken();

        return succcessMssg(201, "Registered Successfully", true, token, res)
    } catch (e) {
        console.log("register err", e)
        return errorMssg(501, "Internal Server Error", false)
    }
}
const login = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return errorMssg(400, "Provide Email and Password", false, res)
        }
        const user = await UserModel.findOne({ email })
        if (!user) {
            return errorMssg(400, "user not found", false, res)
        }
        const isMatch = await user.comparePassword(password)
        if (!isMatch) {
            return errorMssg(404, "Password is wrong", false, res)
        }
        const token = user.generateToken();
        return succcessMssg(201, "Login Successfully", true, token, res)


    } catch (e) {
        console.log("Login err", e)
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        })
    }
}

const checkUser = async (req, res) => {
    try {
        let user = await UserModel.findById(req.user);
        if (!user) {
            return errorMssg(404, "User Not Available", false, res)
        }
        return succcessMssg(201, `Welcome ${user?.username}`, true, user, res)

    } catch (e) {
        console.log("Check-User err", e)
        return errorMssg(501, "Internal Server Error", false, res)
    }

}
module.exports = { login, register, checkUser };