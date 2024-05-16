/**
 * This is for adding files:
 */

const {StatusCodes}=require('http-status-codes');
const logger=require("../../Logger/fileLogger");
const {asyncWrapper}=require("../../MiddleWares/asyncWrapper");
const {addFilesService, storeLogDataInDatabase}=require("../../Services/addFilesService");
const {Configurations}=require("../../Configurations/config");


exports.addFiles=asyncWrapper(async(req, res, next)=>{
    logger.info(`ADD FILES API TRIGGER`);
    res.setHeader("Content-Type", "application/json");
    // res.writeHead(200);
    // const {files, username}=req.body;
    // console.log("IN controller", files);
    // let file="../../logs/info-rotate-2024-05-12.log";
    let files=["/home/ankush/ANKUSH____/Nodejs/Day 1/Basic To-Do App/logs/info-rotate-2024-01-01.log"];
    const user="ankush";
    const result=await addFilesService(files, user);
    res.status(StatusCodes.OK).json(result);
    await storeLogDataInDatabase(result);
});