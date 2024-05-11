/**
 * This file is for filtering log file based on status like error/warn/info.
 */

const {StatusCodes}=require('http-status-codes');
const logger=require("../../Logger/fileLogger");
const {asyncWrapper}=require("../../MiddleWares/asyncWrapper");
const {Configurations}=require("../../Configurations/config");
const {filterByStatusGetAllLogData}=require("../../Services/filterByStatusService");


/**
 * By default once files uploaded, status should be checked. that means all log data.
 */

exports.filterByStatus=asyncWrapper(async(req, res, next)=>{
    const {statusBoxChecked, username, logData}=req.body;
});