const express = require("express");
const { login, checkUser, register } = require("../controller/auth");
const isAuth = require("../middleware/isAuth");
const router = express.Router();

router.post("/login", login)
    .post("/register", register)
    .get("/get-user", isAuth, checkUser)

module.exports = router;