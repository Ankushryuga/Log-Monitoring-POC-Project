// getLogData

/**
 * This is get Log Data API, when user logged in and then add correct file by default, 
 * status box should be checked that means all three level of logs(error, info, warn) 
 * should be checked. and get all log data.
 */

const {StatusCodes}=require('http-status-codes');
const {asyncWrapper}=require("../../MiddleWares/asyncWrapper");
const {Configurations}=require("../../Configurations/config");
const logger=require("../../Logger/fileLogger");
const {getLogData}=require("../../Services/filterByStatusService");


exports.getAllLogDataAfterAddingFiles=asyncWrapper(async(req, res, next)=>{
    const {username, filename}=req.body;
    logger.info(`GET ALL LOG DATA BY DEFAULT AFTER ADDING FILES`);
    const result=await getLogData(username, filename);
    res.status(StatusCodes.OK).json(result);
});