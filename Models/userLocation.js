/**
 * This file is created for the purpose of storing user's locations
 */
const sequelize=require("../DBConnections/dbConnect");
const {DataTypes}=require('sequelize');
const users=require("../Models/users");

const userLocation=sequelize.define(
"userLocation", {
    locationId:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:false,
        // primaryKey:true
    },
    userLatitude:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    userLongitude:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    userAddress:{
        type:DataTypes.STRING,
        allowNull:true
    },
    createdAt:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.NOW,
        allowNull:false
    }
},   
{
    timestamps:true,
    tableName:"userLocation"
});

userLocation.belongsTo(users,{
    foreignKey:"username"
});

module.exports=userLocation;