const postgreSequelize=require("../DBConnections/postgresDbConnect");
const {DataTypes}=require('sequelize');

const structuredlogdata=postgreSequelize.define(
    "structuredlogdata",{
        logid:{
            type:DataTypes.BIGINT,
            allowNull:false,
            autoIncrement:true,
            primaryKey:true
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false
        },
        timestamp:{
            type:DataTypes.DATE,
            allowNull:false
        },
        level:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        service:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    },
    {
        timestamps:true,
        tableName:"structuredlogdata"
    }
);

module.exports=structuredlogdata;