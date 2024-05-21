const logger=require("../Logger/fileLogger");
// const users=require("../Models/users");
const users=require("../PostgresModels/users");
const {RegisterUser}=require("../Configurations/config").Configurations.APIMessages;
// const seqelize=require("../DBConnections/dbConnect");
const postgreSequelize=require("../DBConnections/postgresDbConnect");
const bcrypt=require('bcrypt');
const registerNewUserService=async(username, fullname, useremail, password, usercontactnumber)=>{
    try{
        if(!username || !fullname || !useremail || !password || !usercontactnumber){
            return {
                status:0,
                message:RegisterUser.invalidInput
            }
        }
        try{
        const findUser=await users.findOne({
            where:{username}
        });

        if(findUser){
            return {
                status:0,
                message:`${username} + already exists`
            }
        }
          // Generate a salt and hash the password
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(password, salt);
            console.log("Hashed Password: ", hashedPassword);
        await users.create({
            username:username,
            fullname:fullname,
            useremail:useremail,
            usercontactnumber:usercontactnumber,
            password:hashedPassword,
        });
        return {
            status: 1,
            message: `${username} ${RegisterUser.registerd}`
        };
    }catch(error){
        logger.error(`Error occured while registering new user ${error}`);
        console.log(`Error occured while register`);
        return {
            status:0,
            message:"Error occured while registering: "
        }
    }
    }catch(error){
        console.log("Error occured while creating new users ", error);
        logger.error(`Error occured while registering new user: ${error}`);
        return {
            status:0, 
            message:`${username} can't be registered`
        }
    }
    // return simpleString;
};


const updateExistingUserService=async()=>{

};

const deleteExistingUserService=async(userId)=>{
    if(!userId){
        return {
            status:0, 
            message: `Please provide valid input`
        };
    }
}

module.exports={
    registerNewUserService,
    updateExistingUserService,
    deleteExistingUserService
}