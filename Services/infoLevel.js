const unstructuredlogdata=require("../PostgresModels/unstructuredLogDataModel");
const logger=require("../Logger/fileLogger");
const users=require("../PostgresModels/users");

const getInfoLevel=async(username)=>{
    if(!username){
        return {
            status:0,
            message:"Unknown user"
        };
    }
    try{
    const findUser=await users.findOne({where:{ username }});
    // console.log(findUser);
    if(!findUser){
        return {
            status:0,
            message:"user not found!"
        };
    }
    const result = await unstructuredlogdata.findAll({
        where: {
            username: findUser.dataValues.username,  // Ensure the username matches
            level: 'info'
        }
    });

    const extractedData = result.map(log => log.dataValues);
    // console.log(result);
    return {
        status:1,
        data:extractedData
    }
    }catch(error){
        console.log("Error occured in get info level API: ");
        logger.info("Error occured in get info level API: ");
    }
    //get info data.
    
};





module.exports={
    getInfoLevel
}