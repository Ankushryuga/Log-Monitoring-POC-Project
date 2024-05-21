const { Configurations } = require('../Configurations/config');
const { Sequelize } = require('sequelize');
const logger=require("../Logger/fileLogger");

const sequelize = new Sequelize(
    Configurations.sqlDevelopementDb.databaseName,
    Configurations.sqlDevelopementDb.username,
    Configurations.sqlDevelopementDb.password,
    {
        host: Configurations.sqlDevelopementDb.hostname,
        port: Configurations.sqlDevelopementDb.port, // Make sure this port is correct and open
        dialect: 'mysql', // Assuming MySQL. Change if using another dialect
        dialectOptions: {
            connectTimeout: 60000 // Increase the timeout value to 5 minutes (adjust as needed)
        },
        logging: false,
        pool: {
            max: 10000, // Maximum number of connections in the pool
            min: 0, // Minimum number of connections in the pool
            acquire: 10000, // Maximum time (in milliseconds) that a connection can be idle before being released
            idle: 1000 // Maximum time (in milliseconds) that a connection can be idle before being released
        }
    }
);


sequelize.sync()
    .then(() => {
        console.log('Connection has been established successfully.');
        logger.info(`Connected with mysql`)
    })
    .catch((error) => {
        logger.error(`Unable to connect to the database: ${error}`);
        console.error('Unable to connect to the database:', error);
    });


module.exports=sequelize;