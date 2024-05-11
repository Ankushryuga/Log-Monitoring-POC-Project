const express=require('express');
const router=express.Router();
const {registerNewUser}=require("../Controllers/register/registerNewUser");

router.route("/")
      .post(registerNewUser);



module.exports = router;