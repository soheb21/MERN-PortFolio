const cloudinary = require("../helper/cloudinaryConfig");
const homeModel = require("../model/homeModel");
const { errorMssg, succcessMssg } = require("../utils/messages");

exports.createHome = async (req, res) => {
    try {
        const { position, fullname, linkdin_url, github_url, insta_url, twitter_url, short_des } = req.body;
        const { logo, resume } = req.files;


        const cloudinaryResponseLogo = await cloudinary.uploader.upload(logo.tempFilePath, { folder: "SHOEB-PORTFOLIO" });
        if (!cloudinaryResponseLogo || cloudinaryResponseLogo.error) {
            console.error("cloudinary Error", cloudinaryResponseLogo.error || "Unknown Error")
        }
        const cloudinaryResponseResume = await cloudinary.uploader.upload(resume.tempFilePath, { folder: "SHOEB-RESUME" });
        if (!cloudinaryResponseResume || cloudinaryResponseResume.error) {
            console.error("cloudinary Error", cloudinaryResponseResume.error || "Unknown Error")
        }

        const doc = await homeModel.create({
            position,
            fullname,
            linkdin_url,
            github_url,
            insta_url,
            twitter_url,
            short_des,
            logo: {
                public_id: cloudinaryResponseLogo.public_id,
                logo_URL: cloudinaryResponseLogo.secure_url
            },
            resume: {
                public_id: cloudinaryResponseResume.public_id,
                resume_URL: cloudinaryResponseResume.secure_url
            },
        })
        if (doc) {
            return succcessMssg(201, "Home Info Added Successfully", true, doc, res);
        }


    } catch (e) {
        console.log("createHome error", e)
        return errorMssg(501, "Internal Server Error", false, res)

    }
}

exports.updateHome = async (req, res) => {

    try {
        const { id } = req.params;
        const newDoc = {
            position: req.body.position,
            fullname: req.body.fullname,
            linkdin_url: req.body.linkdin_url,
            github_url: req.body.github_url,
            insta_url: req.body.insta_url,
            twitter_url: req.body.twitter_url,
            short_des: req.body.short_des,
        }

        const existingDoc = await homeModel.findById({ _id: id });
        if (!existingDoc) {
            return errorMssg(400, "Profile Not Found", false, res);
        }
        if (req.files !== null && req.files.logo) {
            const Logo_public_id = existingDoc.logo.public_id;
            await cloudinary.uploader.destroy(Logo_public_id);
            const cloudRes1 = await cloudinary.uploader.upload(req.files.logo.tempFilePath, { folder: "SHOEB-PORTFOLIO" })
            newDoc.logo = {
                public_id: cloudRes1.public_id,
                logo_URL: cloudRes1.secure_url
            }

        }
        if (req.files !== null && req.files.resume) {
            const resume_public_id = existingDoc.resume.public_id;
            await cloudinary.uploader.destroy(resume_public_id);
            const cloudRes2 = await cloudinary.uploader.upload(req.files.resume.tempFilePath, { folder: "SHOEB-RESUME" })
            newDoc.resume = {
                public_id: cloudRes2.public_id,
                resume_URL: cloudRes2.secure_url
            }

        }

        const doc = await homeModel.findByIdAndUpdate({ _id: id }, newDoc, { new: true });
        if (doc) {
            return succcessMssg(201, "Home-Info Updated", true, doc, res);
        }


    } catch (e) {
        console.log("Update-Home error", e)
        return errorMssg(501, "Internal Server Error", false, res)
    }
}
exports.getHomeInfo = async (req, res) => {
    try {
        //maybe we need Hoem-info ID froom Database;
        const doc = await homeModel.findOne({});
        if (doc) {
            return succcessMssg(201, "Home-Info Fetched Sucessfully", true, doc, res);
        }

    } catch (e) {
        console.log("Get-Home-Info Error", e);
        return errorMssg(501, "Internal Server Error", false, res);

    }
}