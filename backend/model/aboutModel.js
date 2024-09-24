const mongoose = require("mongoose");

const aboutSchema = new mongoose.Schema({

    fullname: {
        type: String,
        required: [true, "fullname is required"]
    },
    email: {
        type: String,
        required: [true, "E-mail is required"]
    },
    phone: {
        type: Number,
        required: [true, "Phone is required"]
    },
    education: String,
    des: {
        type: String,
        required: [true, "Description is required"]
    }



}, { timestamps: true })

const AboutModel = new mongoose.model("about", aboutSchema);
module.exports = AboutModel;