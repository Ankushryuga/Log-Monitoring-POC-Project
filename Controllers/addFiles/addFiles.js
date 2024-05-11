/**
 * This is for adding files:
 */

const {StatusCodes}=require('http-status-codes');
const logger=require("../../Logger/fileLogger");
const {asyncWrapper}=require("../../MiddleWares/asyncWrapper");
const {addFilesService}=require("../../Services/addFilesService");
const {Configurations}=require("../../Configurations/config");


exports.addFiles=asyncWrapper(async(req, res, next)=>{
    logger.info(`ADD FILES API TRIGGER`);
    const files=req.body;
    const result=await addFilesService(files);
    res.status(StatusCodes.OK).json(result);
});