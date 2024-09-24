const express = require("express");
const { addAbout, getAbout, updateAbout } = require("../controller/about");
const router = express.Router();

router.post("/add-about", addAbout)
    .put("/update-about/:id", updateAbout)
    .get("/get-about", getAbout)


module.exports = router;