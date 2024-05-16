const logger=require("../Logger/fileLogger");
const {Configurations}=require("../Configurations/config");
// const { addFilesService }=require("../Services/addFilesService");
const {addFiles}=require("../Controllers/addFiles/addFiles");
const express=require('express');
const router=express.Router();


router.route("/addFiles")
      .post(addFiles);

module.exports=router;