const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({

    project_name: {
        type: String,
        required: [true, "project-Name is required"]
    },
    project_des: {
        type: String,
        required: [true, "project-description is required"]
    },
    project_tech: {
        type: String,
        required: [true, "project-Tech is required"]
    },
    project_Github_link: String,
    project_deployed_link: String,
    project_poster: {
        public_id: {
            type: String,
            required: true
        },
        project_poster_URL: {
            type: String,
            required: true
        }
    },
    project_category: {
        type: String,
        default: "Self-Project"
    },
    company_name: String,
    company_role: String,
    company_period: String

}, { timestamps: true })

const projectModel = new mongoose.model("project", projectSchema);
module.exports = projectModel;