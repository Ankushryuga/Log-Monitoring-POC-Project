const logger = require("../Logger/fileLogger");
// const users = require("../Models/users");
const sequelize = require("../DBConnections/dbConnect");
const bcrypt = require("bcrypt");
// const userLocation = require("../Models/userLocation");
const {getReverseGeocodingData}=require("../Utilities/getAddressOfLatLong");
const users=require("../PostgresModels/users");
const userLocation=require("../PostgresModels/usersLocation");

const login = async (username, password, latitude, longitude) => {
    if (!username || !password) {
        logger.error('Please provide both username and password.');
        return {
            status: 0,
            message: 'Please provide both username and password.'
        };
    }
// console.log("INPUT: ", username, password, latitude, longitude);
    try {
        const user = await users.findOne({ where: { username } });
        // console.log("User: ", user.username);
        if (user.username) {
            // console.log(password);
            const validPassword = await bcrypt.compare(password, user.password);
            // console.log("Valid pss:", validPassword);
            if (validPassword) {
                logger.info(`User ${user.username} logged in successfully.`);

                // console.log("Storing location for user:", username);
                // const start=performance.now();
                const userAddress=await getReverseGeocodingData(latitude, longitude);
                // const end=performance.now();
                // console.log("Total Time taken to execute: ", end-start);
                // console.log("User addres while loggin:", userAddress);
                await userLocation.create({
                    username, // Use 'username' as the primary key
                    userLatitude: latitude,
                    userLongitude: longitude,
                    userAddress: userAddress
                });
                return {
                    status: 1,
                    message: 'Login successful.'
                };
            } else {
                logger.error('Invalid password provided.');
                return {
                    status: 0,
                    message: 'Invalid password.'
                };
            }
        } else {
            logger.error(`User not found: ${username}`);
            return {
                status: 0,
                message: 'User not found.'
            };
        }
    } catch (error) {
        logger.error('Login error:', error);
        return {
            status: 0,
            message: 'An error occurred during login.'
        };
    }
};


const logout=async(username)=>{
    if(!username){
        return {
            status:0,
            message:`Please provide username`,
        }
    }
    try{

    }catch(error){
        console.log("Error occured while trying to logout", error);
        logger.info(`Error occured while trying to logout ${error}`);
    }
};

module.exports={
    login,
    logout
};