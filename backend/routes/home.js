const express = require("express");
const { createHome, updateHome, getHomeInfo } = require("../controller/home");
const router = express.Router();

router.post("/createhome", createHome)
    .put("/updatehome/:id", updateHome)
    .get("/gethome", getHomeInfo)

module.exports = router;