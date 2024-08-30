const mongoose = require("mongoose")
require("dotenv").config()

exports.dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{console.log("DATABASE Connection Successfull")})
    .catch((error)=>{
        console.error(error);
        console.log("Failed in database connection");
        process.exit(1);
    })
}