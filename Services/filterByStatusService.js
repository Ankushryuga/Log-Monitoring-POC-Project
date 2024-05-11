/**
 * This is service file of filterByStatus
 */

const {StatusCodes}=require('http-status-codes');
const logger=require("../Logger/fileLogger");
//once info status checked then get info log data.
const getInfoLogData=async(logInfo, logData, username)=>{

};
const getErrorLogData=async(logError, logData, username)=>{

};
const getWarnLogData=async(logWarn, logData, username)=>{

};
//get all log data. when status is checked
const filterByStatusGetAllLogData=async(statusChecked, username, logData)=>{

};
//remove all log data from frontend when clicking status twice it will not delete 
// from database of file 
const hideLogData=async(statusUnChecked, username)=>{

};
//hide info log data.
const hideInfoLogData=async(infoStatusUnchecked, username)=>{

};
const hideErrorLogData=async(errorStatusUnChecked, username)=>{
};
const hideWarnLogData=async(warnStatusUnChecked, username)=>{
};
const getLogData=async(username, fileName)=>{
};
module.exports={
    getInfoLogData,
    getErrorLogData, 
    getWarnLogData, 
    filterByStatusGetAllLogData,
    hideLogData,
    hideInfoLogData,
    hideErrorLogData,
    hideWarnLogData,
    getLogData
};

