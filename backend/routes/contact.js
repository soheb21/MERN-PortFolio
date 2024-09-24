const express = require("express");
const { sendMessage, deleteMessage, getAllMessages } = require("../controller/contact");
const router = express.Router();

router.post("/send-message", sendMessage)
    .delete("/delete-message/:id", deleteMessage)
    .get("/get-messages", getAllMessages)


module.exports = router;