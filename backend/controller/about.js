const AboutModel = require("../model/aboutModel");
const { errorMssg, succcessMssg } = require("../utils/messages")

exports.addAbout = async (req, res) => {
    try {
        const { fullname, email, phone, des, education } = req.body;
        if (!fullname || !email || !phone || !des || !education) {
            return errorMssg(400, "Please Provoide All Fields", false, res);
        }
        const doc = await AboutModel.create({ fullname, email, phone, des, education });
        if (doc) {
            return succcessMssg(201, "About Info Added Successfully", true, doc, res);
        }

    } catch (e) {
        console.log("Add About Error", e)
        return errorMssg(501, "Internal Server Error", false, res);

    }
}
exports.updateAbout = async (req, res) => {
    try {
        const { id } = req.params;
        const doc = await AboutModel.findByIdAndUpdate({ _id: id }, req.body, { new: true });
        if (doc) {
            return succcessMssg(201, "About-info Updated Successfully", true, doc, res);
        }

    } catch (e) {
        console.log("update About Error", e)
        return errorMssg(501, "Internal Server Error", false, res);
    }
}
exports.getAbout = async (req, res) => {
    try {
        //maybe we need About-info ID froom Database;
        const doc = await AboutModel.findOne();
        if (doc) {
            return succcessMssg(201, "About-Info Fetched Sucessfully", true, doc, res);
        }

    } catch (e) {
        console.log("get About Error", e)
        return errorMssg(501, "Internal Server Error", false, res);

    }
}