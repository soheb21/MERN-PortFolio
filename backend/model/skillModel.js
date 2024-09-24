const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({

    title: {
        type: String,
        default: "Software Developer"
    },
    icon_img: {
        public_id: {
            type: String,
            required: [true, "Please Provide Public_ID"]
        },
        icon_img_URL: {
            type: String,
            required: [true, "Please Provide Secure_URL"]
        }
    },

}, { timestamps: true })

const skillModel = new mongoose.model("skill", skillSchema);
module.exports = skillModel;