const users=require("../PostgresModels/users");
const unstructuredlogdata=require("../PostgresModels/unstructuredLogDataModel");
const logger=require("../Logger/fileLogger");


const getErrorLevel=async(username)=>{
    if(!username){
        return {
            status:0,
            message:"Invalid input"
        }
    }
    try{
    const findUser=await users.findOne({where:{username}});
    if(!findUser){
        return {
            status:0,
            message:"Unknow user"
        }
    }
    const result=await unstructuredlogdata.findAll({
        // username:findUser.dataValues.username,
        // level:"error"
        where:{
            username:findUser.dataValues.username,
            level:"error"
        }
    });

    const extractedData=result.map(log=>log.dataValues);
    return {
        status: 1, 
        data:extractedData
    };
    }catch(error){
        console.log("Error occured in Error level API.", error);
        logger.error("Error occured in Error level API", error);
    };
};

module.exports={
    getErrorLevel
}
