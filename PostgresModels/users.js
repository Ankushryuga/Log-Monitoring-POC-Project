const postgreSequelize=require("../DBConnections/postgresDbConnect");
const {DataTypes, sequelize}=require('sequelize');
const logger=require("../Logger/fileLogger");


const users=postgreSequelize.define(
    "users",{
        userId: {
            type: DataTypes.BIGINT,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true,
        },
        username:{
            type:DataTypes.STRING,
            allowNull:false,
            // primaryKey:true,
        },
        fullname:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        useremail:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
            validate:{
                isEmail:true
            }
        },
        password: {
            type: DataTypes.STRING, // Assuming your password is stored as a string
            allowNull: false,
        },
        usercontactnumber:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true,
            validate:{
                is:/^[0-9]/,
                notEmpty:true,
                len:[10-15]
            }
        },
        createdAt:{
            type:DataTypes.DATE,
            defaultValue:DataTypes.NOW,
            // allowNull:false,
        },
        lastLogin:{
            type:DataTypes.DATE,
            defaultValue:DataTypes.NOW,
            // allowNull:false
        }
    },
    {
        timestamps:true,
        tableName:"users"
    }
);

module.exports=users;