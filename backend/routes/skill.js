const express = require("express");
const { deleteSkill, getSkill, updateSkill, addSkill } = require("../controller/skill");
const router = express.Router();

router.post("/add-skill", addSkill)
    .put("/update-skill/:id", updateSkill)
    .get("/get-skill", getSkill)
    .delete("/delete-skill/:id", deleteSkill)


module.exports = router;