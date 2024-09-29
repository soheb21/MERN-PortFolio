const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({

    username: String,
    email: {
        type: String,
        required: [true, "E-mail is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    role: String

}, { timestamps: true })



userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
})
userSchema.methods.generateToken = function () {
    return jwt.sign({ id: this._id }, process.env.SECRET_JWT, { expiresIn: "1d" })
}
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)

}
const UserModel = new mongoose.model("auth", userSchema);


module.exports = UserModel;