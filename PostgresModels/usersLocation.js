const {DataTypes}=require('sequelize');
const postgreSequelize=require("../DBConnections/postgresDbConnect");
// const users=require("./users");


const userslocations=postgreSequelize.define(
    "userslocations",{
        locationId:{
            type:DataTypes.BIGINT,
            allowNull:false,
            primaryKey:true
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        userLatitude:{
            type:DataTypes.FLOAT,
            allowNull:false,
        },
        userLatitude:{
            type:DataTypes.FLOAT,
            allowNull:false
        },
        userAddress:{
            type:DataTypes.TEXT,
            allowNull:false,
        },
        lastLogin:{
            type:DataTypes.DATE,
            defaultValue:DataTypes.NOW
        }
    },
    {
        timestamps:true,
        tableName:"userslocations"
    }
);

module.exports=userslocations;