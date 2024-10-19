const { errorMssg, succcessMssg } = require("../utils/messages")
const cloudinary = require("../helper/cloudinaryConfig");
const projectModel = require("../model/projectModel");


exports.addProject = async (req, res) => {
    try {
        const { project_name, project_des, project_tech, project_Github_link, project_deployed_link, company_name, company_role, company_period } = req.body;
        const { project_poster } = req.files;
        const cloudinaryResponse = await cloudinary.uploader.upload(project_poster.tempFilePath, { folder: "SHOEB-Project" });

        const doc = await projectModel.create({ project_name, project_des, project_tech, project_Github_link, project_deployed_link, company_name, company_role, company_period, project_poster: { public_id: cloudinaryResponse.public_id, project_poster_URL: cloudinaryResponse.secure_url } });
        if (doc) {
            return succcessMssg(201, "Project Info Added Successfully", true, doc, res);
        }

    } catch (e) {
        console.log("Add Project Error", e)
        return errorMssg(501, "Internal Server Error", false, res);

    }
}
exports.updateProject = async (req, res) => {
    try {
        const { id } = req.params;
        const newDoc = {
            project_name: req.body.project_name,
            project_des: req.body.project_des,
            project_tech: req.body.project_tech,
            project_Github_link: req.body.project_Github_link,
            project_deployed_link: req.body.project_deployed_link,
            company_name: req.body.company_name,
            company_role: req.body.company_role,
            company_period: req.body.company_period,
            project_category: req.body.project_category
        }
        const existingDoc = await projectModel.findById(id);
        if (!existingDoc) {
            return errorMssg(400, "Not Found", false, res);
        }
        if (req.files && req.files.project_poster) {
            await cloudinary.uploader.destroy(existingDoc.project_poster.public_id)
            const cloudinaryResponse = await cloudinary.uploader.upload(req.files.project_poster.tempFilePath, { folder: "SHOEB-Project" });
            newDoc.project_poster = {
                public_id: cloudinaryResponse.public_id,
                project_poster_URL: cloudinaryResponse.secure_url
            }
        }


        const doc = await projectModel.findByIdAndUpdate({ _id: id }, newDoc, { new: true });
        if (doc) {
            return succcessMssg(201, "Project-info Updated Successfully", true, doc, res);
        }

    } catch (e) {
        console.log("update Project Error", e)
        return errorMssg(501, "Internal Server Error", false, res);
    }
}
exports.getProject = async (req, res) => {
    try {
        //need to add category filter by self project and company assesments;
        const doc = await projectModel.find().sort({ createdAt: -1 });
        if (doc) {
            return succcessMssg(201, "Project-Info Fetched Sucessfully", true, doc, res);
        }

    } catch (e) {
        console.log("get Project Error", e)
        return errorMssg(501, "Internal Server Error", false, res);

    }
}

exports.getProjectDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const doc = await projectModel.findById(id);
        if (doc) {
            return succcessMssg(201, "Project-details Fetched Sucessfully", true, doc, res);
        }

    } catch (e) {
        console.log("get Project Error", e)
        return errorMssg(501, "Internal Server Error", false, res);

    }
}

exports.deleteProject = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("id", id)
        await projectModel.findByIdAndDelete({ _id: id });

        return succcessMssg(201, "Project-info Deleted Successfully", true, id, res);


    } catch (e) {
        console.log("delete Project Error", e)
        return errorMssg(501, "Internal Server Error", false, res);
    }
}