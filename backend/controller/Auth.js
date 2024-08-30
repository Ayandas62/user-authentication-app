const Profile = require("../models/Profile");
const User = require("../models/User");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

require("dotenv").config()

exports.userSignup = async(req,res)=>{
    try{
        const {firstName,lastName,email,password,teamCode,accountType,contactNumber} = req.body; 

        const exitingUser = await User.findOne({email})
        if(exitingUser){
            return res.status(500).json({ 
                success:false,
                message: 'User All ready Register',
            });
        }

        const hassedPass = await bcrypt.hash(password,10);

        const profileDetails = await Profile.create({
            number:contactNumber ? contactNumber : null,
            bio:null,
            dateOfBirth:null,
            gender:null,
        })

        const user = await User.create({
            firstName,lastName,
            email,password:hassedPass,
            additionalDetails:profileDetails._id,
            accountType:accountType?accountType:"User",
            teamCode:teamCode?teamCode:null,
            image:`https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`
        })

        return res.json({ 
            success:true,
            message: 'Successfully Register' 
        });
    }catch(err){
        console.log(err)
        console.error(err);
        return res.status(400).json({ message: 'Failed to Signup' });
    }
}

exports.login = async(req,res)=>{
    try{
        //fetch email and password from request body
        const {email,password} = req.body;
        const user = await User.findOne({email}).populate("additionalDetails")
        // check: is user allready in database
        if(!user){
            return res.status(400).json({ 
                success:false,
                message: 'User Is not register Signup First' 
            });
        }
        //check password
        else if(await bcrypt.compare(password,user.password)){
                const payload = {
                    id:user.id,
                    firstName:user.firstName,
                    lastName:user.lastName,
                    email:user.email,
                    image:user.image,
                    role:user.accountType
                }
                //make token
            const token = jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn:"24h"
            })

            user.token = token
            user.password = undefined;
            const option = {
                expires:new Date(Date.now() +10*24*60*60*1000),
                httpOnly:true
            }
            //save cookie
        res.cookie("token",token,option).status(200).json({
            success:true,
            message:"Successfully Logged in user",
            user
        })
        }else{
            res.json({
                success:false,
                message:"Incorrect Password"
            })
        }
    }catch(error){
        console.log(error)
        console.error(error);
        return res.status(400).json({ 
            success:false,
            message: 'Login failed'
         });
    }
}