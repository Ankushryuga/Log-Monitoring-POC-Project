const express=require('express');
const router=express.Router();
const {filterByInfoStatus}=require("../Controllers/Status/filterByInfoStatus");
const {filterByErrorStatus}=require("../Controllers/Status/filterByErrorStatus");
router.route("/info")
      .post(filterByInfoStatus)


router.route("/error")
      .post(filterByErrorStatus)

module.exports=router;