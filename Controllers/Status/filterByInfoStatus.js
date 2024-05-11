/**
 * this is get info API 
 */
const {StatusCodes}=require('http-status-codes');
const {asyncWrapper}=require("../../MiddleWares/asyncWrapper");
const logger=require("../../Logger/fileLogger");
const {Configurations}=require("../../Configurations/config");
const {getInfoLogData}=require("../../Services/filterByStatusService");


exports.filterByInfoStatus=asyncWrapper(async(req, res, next)=>{
    const {infoStatusChecked, logData, username}=req.body;
    logger.info(`FILTER BY INFO STATUS API TRIGGER ${infoStatusChecked}`);
    const result=await getInfoLogData(infoStatusChecked, logData, username);
    res.status(StatusCodes.OK).json(result);    
});

