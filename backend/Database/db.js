const mongoose = require("mongoose");

exports.connectDB = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Database is connect at ${mongoose.connection.host}`)

    } catch (e) {
        console.log(`Database is Failed ${e}`)

    }
}