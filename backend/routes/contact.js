const express = require("express");
const { sendMessage, deleteMessage, getAllMessages } = require("../controller/contact");
const isAuth = require("../middleware/isAuth");
const router = express.Router();

router.post("/send-message", sendMessage)
    .delete("/delete-message/:id", isAuth, deleteMessage)
    .get("/get-messages", isAuth, getAllMessages)


module.exports = router;