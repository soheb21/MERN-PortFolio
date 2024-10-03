const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema({

    logo: {
        public_id: {
            type: String,
        },
        logo_URL: {
            type: String,
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
    twitter_url: String,
    short_des: String,
    resume: {
        public_id: {
            type: String,

        },
        resume_URL: {
            type: String,

        }
    }

}, { timestamps: true })

const homeModel = new mongoose.model("home", homeSchema);
module.exports = homeModel;