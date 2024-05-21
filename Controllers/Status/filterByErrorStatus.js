/**
 * This is API file for filtering log data by error status.
 */
const {StatusCodes}=require('http-status-codes');
const {asyncWrapper}=require("../../MiddleWares/asyncWrapper");
const logger=require("../../Logger/fileLogger");
const {Configurations}=require("../../Configurations/config");
// const {getErrorLogData}=require("../../Services/filterByStatusService");
const {getErrorLevel}=require("../../Services/errorLevel");

exports.filterByErrorStatus=asyncWrapper(async(req, res, next)=>{
    // const {errorStatusChecked, logData, username}=req.body;
    const {username}=req.body;
    logger.info(`FILTER BY ERROR STATUS CHECKED API TRIGGER`);
    const result=await getErrorLevel(username);
    res.status(StatusCodes.OK).json(result);
});


