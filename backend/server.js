require("dotenv").config();
const express = require("express");
const server = express();
const cors = require("cors");
const fileUpload = require("express-fileupload")
const { connectDB } = require("./Database/db");

//middleware
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/"
}))

//routes
server.use("/api/v1/auth", require("./routes/auth"))
server.use("/api/v1/home", require("./routes/home"))
server.use("/api/v1/about", require("./routes/about"))
server.use("/api/v1/skill", require("./routes/skill"))
server.use("/api/v1/project", require("./routes/project"))

//Database
connectDB();

const PORT = process.env.PORT || 3000
server.listen(process.env.PORT, () => console.log(`Serevr is running at ${PORT}`))
