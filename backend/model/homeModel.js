const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({

    logo: {
        public_id: {
            type: String,
            required: true
        },
        logo_URL: {
            type: String,
            required: true
        }
    },
    position: {
        type: String,
        default: "Software Developer"
    },
    fullname: {
        type: String,
        required: [true, "full is required"]
    },
    linkdin_url: String,
    github_url: String,
    insta_url: String,
    resume: {
        public_id: {
            type: String,
            required: true
        },
        resume_URL: {
            type: String,
            required: true
        }
    }

}, { timestamps: true })

const homeModel = new mongoose.model("home", homeSchema);
module.exports = homeModel;