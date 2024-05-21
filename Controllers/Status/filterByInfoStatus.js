/**
 * this is get info API 
 */
const {StatusCodes}=require('http-status-codes');
const {asyncWrapper}=require("../../MiddleWares/asyncWrapper");
const logger=require("../../Logger/fileLogger");
// const {Configurations}=require("../../Configurations/config");
// const {getInfoLogData}=require("../../Services/filterByStatusService");
const {getInfoLevel}=require("../../Services/infoLevel");

exports.filterByInfoStatus=asyncWrapper(async(req, res, next)=>{
    // const {infoStatusChecked, logData, username}=req.body;
    logger.info(`FILTER BY INFO STATUS API TRIGGER `);
    const {username}=req.body;
    const result=await getInfoLevel(username);
    // console.log(result);
    // const result=await getInfoLogData(infoStatusChecked, logData, username);
    res.status(StatusCodes.OK).json(result);
    
});


// const {username, fullname, useremail, password, usercontactnumber}=req.body;
//         const result = await registerNewUserService(username, fullname, useremail, password, usercontactnumber);
//         // console.log("Result: ", result);
//         res.status(StatusCodes.OK).json(result);
