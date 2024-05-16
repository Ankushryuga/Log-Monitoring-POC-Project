/**
 * This file is to hide all log data when status box is unchecked.
 */

const {StatusCodes}=require('http-status-codes');
const {asyncWrapper}=require("../../MiddleWares/asyncWrapper");
const {hideLogDataService}=require("../../Services/filterByStatusService");
const logger=require("../../Logger/fileLogger");

exports.hideAllLogData=asyncWrapper(async(req, res, next)=>{
    const {statusUnchecked, logData}=req.body;
    logger.info(`HIDE ALL LOG DATA API TRIGGER ${statusUnchecked}`);
    const result=await hideLogDataService(statusUnchecked, logData);
    res.status(StatusCodes.OK).json(result);
})
