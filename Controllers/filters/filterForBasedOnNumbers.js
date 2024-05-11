/**
 * This file is for filtering log list based on number of input and input should be 
 * integer type only. for example filter your log for 100,200,500, 1000 etc.
 * 
 */


const {StatusCodes}=require('http-status-codes');
const {Configurations}=require("../../Configurations/config");
const {asyncWrapper}=require("../../MiddleWares/asyncWrapper");
const logger=require("../../Logger/fileLogger");
const {filterForBasedOnNumbersService}=require("../../Services/filterForDateAndNumbers");


exports.filterBasedOnNumbers=asyncWrapper(async(req, res, next)=>{
    const {logNumbers, logData}=req.body;
    logger.info(`FILTER BASED ON LOG NUMBERS API TRIGGER ${logNumbers}`);
    const result=await filterForBasedOnNumbersService(logNumbers, logData);
    res.status(StatusCodes.OK).json(result);
});
