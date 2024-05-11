const logger=require("../Logger/fileLogger");
const express=require("express");
const router=express.Router();
const {login}=require("../Controllers/LogInAndLogOut/login");
const { logout } = require("../Controllers/LogInAndLogOut/logout");


router.route("/login")
      .post(login);

router.route("/logout")
      .post(logout)


module.exports=router;