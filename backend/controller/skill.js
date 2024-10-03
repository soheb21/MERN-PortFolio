const skillModel = require("../model/skillModel");
const { errorMssg, succcessMssg } = require("../utils/messages")
const cloudinary = require("../helper/cloudinaryConfig");


exports.addSkill = async (req, res) => {
    try {
        const { title } = req.body;
        const { icon_img } = req.files;
        const cloudinaryResponse = await cloudinary.uploader.upload(icon_img.tempFilePath, { folder: "SHOEB-SKILL" });

        const doc = await skillModel.create({ title, icon_img: { public_id: cloudinaryResponse.public_id, icon_img_URL: cloudinaryResponse.secure_url } });
        if (doc) {
            return succcessMssg(201, "Skill Info Added Successfully", true, doc, res);
        }

    } catch (e) {
        console.log("Add Skill Error", e)
        return errorMssg(501, "Internal Server Error", false, res);

    }
}
exports.updateSkill = async (req, res) => {
    try {
        const { id } = req.params;
        const newDoc = {
            title: req.body.title
        }
        const existingDoc = await skillModel.findById(id);
        if (!existingDoc) {
            return errorMssg(400, "Not Found", false, res);
        }
        if (req.files !== null && req.files.icon_img) {
            await cloudinary.uploader.destroy(existingDoc.icon_img.public_id)
            const cloudinaryResponse = await cloudinary.uploader.upload(req.files.icon_img.tempFilePath, { folder: "SHOEB-SKILL" });
            newDoc.icon_img = {
                public_id: cloudinaryResponse.public_id,
                icon_img_URL: cloudinaryResponse.secure_url
            }
        }

        const doc = await skillModel.findByIdAndUpdate({ _id: id }, newDoc, { new: true });
        if (doc) {
            return succcessMssg(201, "Skill-info Updated Successfully", true, doc, res);
        }

    } catch (e) {
        console.log("update Skill Error", e)
        return errorMssg(501, "Internal Server Error", false, res);
    }
}
exports.getSkill = async (req, res) => {
    try {
        const doc = await skillModel.find();
        if (doc) {
            return succcessMssg(201, "Skill-Info Fetched Sucessfully", true, doc, res);
        }

    } catch (e) {
        console.log("get Skill Error", e)
        return errorMssg(501, "Internal Server Error", false, res);

    }
}

exports.deleteSkill = async (req, res) => {
    try {
        const { id } = req.params;
        await skillModel.findByIdAndDelete({ _id: id });

        return succcessMssg(201, "Skill-info Deleted Successfully", true, id, res);


    } catch (e) {
        console.log("delete Skill Error", e)
        return errorMssg(501, "Internal Server Error", false, res);
    }
}