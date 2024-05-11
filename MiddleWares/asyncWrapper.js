// const logger=require("../Logger/fileLogger");


// const asyncWrapper=async(fn)=>{
//     return async (req, res, next)=>{
//     try{
//         await fn(req, res, next);
//     }catch(error){
//         logger.error(`Error occured in asyncWrapper ${error}`);
//         next();
//     }
//     }
// };


// module.exports={
//     asyncWrapper,
// }
const logger = require("../Logger/fileLogger");

const asyncWrapper = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        } catch (error) {
            logger.error(`Error occurred in asyncWrapper: ${error}`);
            next(error);
        }
    };
};

module.exports = {
    asyncWrapper,
};
