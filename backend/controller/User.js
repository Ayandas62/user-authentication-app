const Profile = require("../models/Profile");
const User = require("../models/User");

exports.deleteUser = async(req,res)=>{
    try{
        const {userId} = req.body;
        const user = await User.findById(userId)
        await Profile.findByIdAndDelete(user.additionalDetails)
        await User.findByIdAndDelete(userId)
        res.json({
            success:true,
            message:"Successfully delete Account"
        })
    }catch(err){
        return res.status(400).json({ 
            success:false,
            message: 'Failed to delete account' });
    }

}