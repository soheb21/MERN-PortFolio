const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({

    client_name: String,
    client_email: {
        type: String,
        required: [true, "Client-Email is required"]
    },
    client_message: {
        type: String,
        required: [true, "Client-Email is required"]
    },


}, { timestamps: true })

const contactModel = new mongoose.model("contact", contactSchema);
module.exports = contactModel;