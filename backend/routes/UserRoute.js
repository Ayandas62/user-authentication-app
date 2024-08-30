const express = require("express");
const router = express.Router();


const { userSignup, login } = require("../controller/Auth");
const { auth, isManager,isSuperAdmin } = require("../middleware/Authentication");
const { updateProfile, getAllUser, getAllMember } = require("../controller/UpdateProfile");
const { deleteUser } = require("../controller/User");
const { createReport, getAllReport, deleteReport } = require("../controller/Report");


router.post("/signup", userSignup);
router.post("/login",login);
router.put("/updateProfile",auth,updateProfile);
router.get("/getAllUser",auth,getAllUser);
router.get("/getAllMember",auth,getAllMember);

router.delete("/deleteAccount",auth,isSuperAdmin,deleteUser);

router.post("/sendReports",auth,isManager,createReport)
router.get("/getAllReports",auth,isSuperAdmin,getAllReport);
router.delete("/deleteReport",auth,isSuperAdmin,deleteReport)


module.exports = router
