exports.errorMssg = (statusCode, mssg, success, res) => {
    res.status(statusCode).json({
        success,
        message: mssg
    })
}
exports.succcessMssg = (statusCode, mssg, success, doc, res) => {
    res.status(statusCode).json({
        success,
        message: mssg,
        doc
    })
}