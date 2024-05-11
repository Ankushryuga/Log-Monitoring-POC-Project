// const users=require('../../Models/users');
const logger=require('../../Logger/fileLogger');
const {StatusCodes}=require("http-status-codes");
const {login}=require("../../Services/loginLogoutService");
const {asyncWrapper}=require("../../MiddleWares/asyncWrapper");
// const {Configurations}=require("../../Configurations/config");


exports.login=asyncWrapper(async(req, res)=>{
    const {username, password, latitude, longitude}=req.body;
    logger.info(`LOGIN API TRIGGER`);
    const result=await login(username, password, latitude, longitude);
    res.status(StatusCodes.OK).json(result);
});
