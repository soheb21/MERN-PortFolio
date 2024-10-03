const express = require("express");
const { addAbout, getAbout, updateAbout } = require("../controller/about");
const isAuth = require("../middleware/isAuth");
const router = express.Router();

router.post("/add-about", isAuth, addAbout)
    .put("/update-about/:id", isAuth, updateAbout)
    .get("/get-about", getAbout)


module.exports = router;