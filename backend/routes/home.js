const express = require("express");
const { createHome, updateHome, getHomeInfo } = require("../controller/home");
const isAuth = require("../middleware/isAuth");
const router = express.Router();

router.post("/createhome", isAuth, createHome)
    .put("/updatehome/:id", isAuth, updateHome)
    .get("/gethome", getHomeInfo)

module.exports = router;