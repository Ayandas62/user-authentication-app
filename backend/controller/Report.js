const Report = require("../models/Report");

exports.createReport = async(req,res)=>{
    try{
        const fName = req.user.firstName;
        const lName = req.user.lastName
        console.log(req.user)
        const {report} = req.body;
        const response = await Report.create({report,name:`${fName} ${lName}`})
        return res.json({
            success:true,
            message:"Successfully Submit Report",
            data:response,
        })
    }catch(err){
        console.log(err)
        return res.json({
            success:false,
            message:"Failed to send Report"
        })
    }
}

exports.getAllReport = async(req,res)=>{
    try{
        const user = await Report.find({})
        res.json({
            success:true,
            message:"successfully fetch all data from collection",
            data:user
        })
    }catch(error){
        console.log(error)
        return res.status(400).json({ 
            success:false,
            message: 'Failed to fetch all user Data' 
        });
    }
}

exports.deleteReport = async(req,res)=>{
    try{
        const {id} = req.body
        console.log(id)
        await Report.findByIdAndDelete(id)
        res.json({
            success:true,
            message:"Successfully delete report"
        })
    }catch(err){
        console.log(err)
        res.json({
            success:false,
            message:"Failed to delete report"
        })
    }  
}