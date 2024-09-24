const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({

    senderName: String,
    subject: {
        type: String,
        required: [true, "subject is required"]
    },
    message: {
        type: String,
        required: [true, "Sender-Message is required"]
    },


}, { timestamps: true })

const contactModel = new mongoose.model("contact", contactSchema);
module.exports = contactModel;