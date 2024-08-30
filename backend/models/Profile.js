const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    number: {
        type: Number,
        trim:true,
      },
    bio: {
        type: String,
      },
    dateOfBirth: {
        type:String,
      },
      gender:{
        type:String,
      }
})

module.exports  = mongoose.model("Profile", profileSchema);