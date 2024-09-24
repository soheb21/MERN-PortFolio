const express = require("express");
const { addProject, updateProject, getProject, deleteProject, getProjectDetails } = require("../controller/project");
const router = express.Router();

router.post("/add-project", addProject)
    .put("/update-project/:id", updateProject)
    .get("/get-project", getProject)
    .get("/get-project/details/:id", getProjectDetails)
    .delete("/delete-project/:id", deleteProject)


module.exports = router;