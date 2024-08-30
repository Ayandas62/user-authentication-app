const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
    teamCode:{
        type:String
    },
    accountType: {
            type: String,
            anum:["User","Manager","Admin","Super Admin"],
            required: true
          },
    image:{
        type:String,
        required:true
    },
    additionalDetails:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"Profile"
    },
    token : {
        type: String,
      },
    
})

module.exports = mongoose.model("User", userSchema);