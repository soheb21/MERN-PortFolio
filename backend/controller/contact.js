const contactModel = require("../model/contactModel");
const { errorMssg, succcessMssg } = require("../utils/messages");

const sendMessage = async (req, res) => {
    const { senderName, subject, message } = req.body;
    if (!senderName || !subject || !message) return errorMssg(400, "Please Provide All Fields", false, res);

    const doc = await contactModel.create({ senderName, subject, message })
    if (doc) {
        return succcessMssg(201, "Message Sent", true, doc, res);
    }
}

const getAllMessages = async (req, res) => {
    const doc = await contactModel.find();
    if (doc) {
        return succcessMssg(201, "Fetched All Message Successfully", true, doc, res);
    }
}
const deleteMessage = async (req, res) => {
    const { id } = req.params;
    const mssg = await contactModel.findById({ _id: id })
    if (!mssg) return errorMssg(400, "Message Already deleted", false, res);
    await mssg.deleteOne();
    return succcessMssg(201, "Message deleted successfully", true, id, res);
}

module.exports = { sendMessage, getAllMessages, deleteMessage }