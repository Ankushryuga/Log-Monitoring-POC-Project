// const {StatusCodes}=require('http-status-codes');
// const logger=require("../../Logger/fileLogger");
// const {asyncWrapper}=require("../../MiddleWares/asyncWrapper");
// const {registerNewUserService}=require("../../Services/registerNewUserService");

// exports.registerNewUser=asyncWrapper(async(req, res)=>{
//     const result= await registerNewUserService();
//     res.status(StatusCodes.OK).send(result);
//     next();
// });




const { StatusCodes } = require('http-status-codes');
const logger = require("../../Logger/fileLogger");
const { asyncWrapper } = require("../../MiddleWares/asyncWrapper");
const {Configurations}=require("../../Configurations/config");
const { registerNewUserService } = require("../../Services/registerNewUserService");

exports.registerNewUser = asyncWrapper(async (req, res, next) => {
    // try {
        logger.info(Configurations.Logger.registerUser, req);
        const {username, fullname, useremail, password, usercontactnumber}=req.body;
        const result = await registerNewUserService(username, fullname, useremail, password, usercontactnumber);
        // console.log("Result: ", result);
        res.status(StatusCodes.OK).json(result);
    //     } catch (error) {
    //     next(error);
    // }
});
