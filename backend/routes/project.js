const express = require("express");
const { addProject, updateProject, getProject, deleteProject, getProjectDetails } = require("../controller/project");
const isAuth = require("../middleware/isAuth");
const router = express.Router();

router.post("/add-project", isAuth, addProject)
    .put("/update-project/:id", isAuth, updateProject)
    .get("/get-project", getProject)
    .get("/get-project/details/:id", getProjectDetails)
    .delete("/delete-project/:id", isAuth, deleteProject)


module.exports = router;