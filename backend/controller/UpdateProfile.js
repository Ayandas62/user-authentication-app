const Profile = require("../models/Profile");
const User = require("../models/User");

exports.updateProfile = async(req,res)=>{
    try{
        const {firstName,lastName,number,bio,dateOfBirth,gender} = req.body;
        console.log(req.user)
        const userId = req.user.id;
        const user = await User.findById(userId)
        if(!user){
            return res.status(400).json({ message: 'User not found' });
        }

        await Profile.findByIdAndUpdate(user.additionalDetails,{
            number,bio,dateOfBirth,gender
        })
        await User.findByIdAndUpdate(userId,{
            firstName,
            lastName
        })
        const updatedUser = await User.findById(userId).populate("additionalDetails").exec()
        res.status(200).json({
            success:true,
            message:"Successfulle update details",
            data:updatedUser
        })
    }catch(error){
        console.log("error on update user details-->",error)
        console.error(error);
        return res.status(400).json({ 
            success:false,
            message: 'Failed to update user details' 
        });
    }
}


exports.getAllUser = async(req,res)=>{
    try{
        const user = await User.find({})
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

exports.getAllMember = async(req,res)=>{
    try{
        const {teamCode} = req.body
        console.log(teamCode)
        const user = await User.find({teamCode})

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