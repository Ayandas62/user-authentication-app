const jwt = require("jsonwebtoken")
require("dotenv").config()
exports.auth = (req,res,next)=>{
    try{
        const token = req.cookies.token || req.body.token || 
        (req.header("Authorization") && req.header("Authorization").replace("Bearer ", ""))
        if(!token){
            return res.status(500).json({ 
                success:false,
                message: 'Token missing'
            });
        }else{
            const decode = jwt.verify(token,process.env.JWT_SECRET)
            req.user = decode
        }
        next()
    }catch(error){
        console.log(error)
        return res.status(400).json({ 
            success:false,
            message: 'Invalid token' 
        });
    }
}

exports.isManager = (req,res,next)=>{
    try{
        if(req.user.role !== "Manager"){
            res.status(401).json({
                succcess:false,
                message:"You are not a Manager"
            })
        }else{
            next()
        }
    }catch(error){
        console.log(error);
        res.status(500).json({
            succcess:false,
            message:"User role cant verify, please try again"
        })
    }
}

exports.isAdmin = (req,res,next)=>{
    try{
        if(req.user.role !== "Admin"){
            res.status(401).json({
                succcess:false,
                message:"You are not an Admin"
            })
        }else{
            next()
        }
    }catch(error){
        console.log(error);
        res.status(500).json({
            succcess:false,
            message:"User role cant verify, please try again"
        })
    }
}

exports.isSuperAdmin = (req,res,next)=>{
    try{ 
        console.log("Middleware",req.user)
        if(req.user.role !== "Super Admin"){
            res.status(401).json({
                succcess:false,
                message:"You are not a Super Admin"
            })
        }else{
            next()
        }
    }catch(error){
        console.log(error);
        res.status(500).json({
            succcess:false,
            message:"User role cant verify, please try again"
        })
    }
}