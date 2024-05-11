const {StatusCodes}=require("http-status-codes");
const {asyncWrapper}=require("../../MiddleWares/asyncWrapper");
const logger=require("../../Logger/fileLogger");
const {logout}=require("../../Services/loginLogoutService");


exports.logout=asyncWrapper(async(req, res)=>{
    logger.info(`LOG OUT API TRIGGER`);
    const {username}=req.body;
    const result=await logout(username);
    res.status(StatusCodes.OK).json(result);
});


