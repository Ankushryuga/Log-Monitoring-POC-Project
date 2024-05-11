/**
 * This is API file for filtering log data by error status.
 */
const {StatusCodes}=require('http-status-codes');
const {asyncWrapper}=require("../../MiddleWares/asyncWrapper");
const logger=require("../../Logger/fileLogger");
const {Configurations}=require("../../Configurations/config");
const {getErrorLogData}=require("../../Services/filterByStatusService");


exports.filterByErrorStatus=asyncWrapper(async(req, res, next)=>{
    const {errorStatusChecked, logData, username}=req.body;
    logger.info(`FILTER BY ERROR STATUS CHECKED API TRIGGER ${errorStatusChecked}`);
    const result=await getErrorLogData(errorStatusChecked, logData, username);
    res.status(StatusCodes.OK).json(result);
});


