const mongoose = require("mongoose")
const VideoSchema = new mongoose.Schema({
    "name":{
        type:String,
        required:[true, "Please provide name."]
    },
    "video":{
        type:String,
        required:[true, "Please provide user email."],
    }
})
const CounVideo = mongoose.model("CounVideo", VideoSchema)
module.exports = CounVideo;