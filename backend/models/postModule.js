const moment = require("moment/moment")
const mongoose = require("mongoose")

const Schema =mongoose.Schema
const postSchema = new Schema ({
    body:{
        type:String,
        required:true,
        maxlength :1000
    },
    UserId:{
        type:mongoose.Types.ObjectId,
        ref:'Users',
        required:true
    },
    comment:[{
        type:mongoose.Types.ObjectId,
        ref:'Comment'
    }],
    create_at:{
        type: Date ,
        default :Date.now,
        get:function(createAt){
            return moment(createAt).format('MMMM Do YYYY, h:mm:ss a')
        }
    }
},{timestamps:true}) 

const Post = mongoose.model("Post" , postSchema)
module.exports= Post 