/**
 * This file is for get warnning log API
 */

const {StatusCodes}=require('http-status-codes');
const {asyncWrapper}=require("../../MiddleWares/asyncWrapper");
const logger=require("../../Logger/fileLogger");
const {Configurations}=require("../../Configurations/config");
const {getWarnLogData}=require("../../Services/filterByStatusService");


exports.filterByWarnStatus=asyncWrapper(async(req, res, next)=>{
    const {warnStatusChecked, logData}=req.body;
    logger.info(`FILTER BY WARNING STATUS API TRIGGER ${warnStatusChecked}`);
    const result=await getWarnLogData(warnStatusChecked, logData);
    res.status(StatusCodes.OK).json(result);
});