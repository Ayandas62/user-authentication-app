

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reportSchema = new Schema({
  report: {
    type:String ,
    required: true
  },
  name:{
    type:String,
    required:true,
  }
});

module.exports = mongoose.model("Report", reportSchema);