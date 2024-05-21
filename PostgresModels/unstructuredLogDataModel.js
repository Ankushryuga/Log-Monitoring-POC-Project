const postgreSequelize=require("../DBConnections/postgresDbConnect");
const {DataTypes}=require('sequelize');


const unstructuredlogdata=postgreSequelize.define(
    "unstructuredlogdata",{
        // logid:{
        //     type:DataTypes.BIGINT,
        //     autoIncrement:true,
        //     allowNull:false,
        //     primaryKey:true
        // },
        username:{
            type:DataTypes.STRING,
            allowNull:false,
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
            type:DataTypes.STRING,
            allowNull:true,
        },
        message:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        date:{
            type:DataTypes.DATEONLY,
            // defaultValue:DataTypes.NOW,
        }
    },
    {
        timestamps:true,
        tableName:"unstructuredlogdata"
    }
);

module.exports=unstructuredlogdata;