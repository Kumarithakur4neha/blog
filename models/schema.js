const mongoose=require("mongoose")

const plm=require("passport-local-mongoose")

const userschema=mongoose.Schema({
    fullname:String,
    username:String,
    email:String,
    password:String,
})

userschema.plugin(plm)

module.exports=mongoose.model("user",userschema)