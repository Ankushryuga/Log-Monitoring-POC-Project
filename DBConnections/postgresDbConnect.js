const {Sequelize}=require('sequelize');
const {Configurations}=require("../Configurations/config");
const logger=require("../Logger/fileLogger");

// const database=Configurations.postgresDevelopmentDb.database;
// const username=Configurations.postgresDevelopmentDb.username;
// const password=Configurations.postgresDevelopmentDb.password;
// const host=Configurations.postgresDevelopmentDb.host;
// const dialect=Configurations.postgresDevelopmentDb.dialect;

const postgreSequelize=new Sequelize(
    Configurations.postgresDevelopmentDb.database,
    Configurations.postgresDevelopmentDb.username, 
    Configurations.postgresDevelopmentDb.password,
    {
        host:Configurations.postgresDevelopmentDb.host,
        port:Configurations.postgresDevelopmentDb.port,
        dialect:'postgres',
        dialectOptions:{
            connectTimeout:60000
        },
        logging:false,
        pool:{
            max: 10000, // Maximum number of connections in the pool
            min: 0, // Minimum number of connections in the pool
            acquire: 10000, // Maximum time (in milliseconds) that a connection can be idle before being released
            idle: 1000 // Maximum time (in milliseconds) that a connection can be idle before being released
        }
    }
);

postgreSequelize.sync()
         .then(()=>{console.log("Connected with postgress Database");
         logger.info(`Connected with postgresql database`);
         })
         .catch((error)=>{
            console.log("Erro occured while connecting with postgres SQL database:", error);
            logger.error("Error Occured while connecting with postgresql database", error);
         });


module.exports=postgreSequelize;