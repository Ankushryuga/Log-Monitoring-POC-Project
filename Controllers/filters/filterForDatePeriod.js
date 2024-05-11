/**
 * This file is for filtering based on date period.
 * Types:
 * 1. Live Tail
 * 2. Past 30minutes
 * 3. Past 1H
 * 4. Past 12H
 * 5. Past 1Day
 * 6. Past 2Day
 * 7. Past 7Day
 * 8. Past 15Day
 * 9. Past 1Month
 * 10. Select From calendar
 * 
 */

const {StatusCodes}=require('http-status-codes');
const logger=require("../../Logger/fileLogger");
const {Configurations}=require("../../Configurations/config");
const {filterForDatePeriodService}=require("../../Services/filterForDateAndNumbers");
const { asyncWrapper } = require('../../MiddleWares/asyncWrapper');


exports.filterForDatePeriod=asyncWrapper(async(req, res)=>{
    const {timePeriod, logData}=req.body;
    logger.info(`Filter By Date Period API TRIGGER ${timePeriod}`);
    const result=await filterForDatePeriodService(timePeriod, logData);
    res.status(StatusCodes.OK).json(result);
});

