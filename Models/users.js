const sequelize = require('../DBConnections/dbConnect');
const { DataTypes } = require('sequelize');

const users = sequelize.define(
    "users", {
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        fullname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        useremail: {
            type: DataTypes.STRING, // Assuming your email is stored as a string
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true // Adding email validation
            }
        },
        password: {
            type: DataTypes.STRING, // Assuming your password is stored as a string
            allowNull: false,
        },
        phonenumber:{
            type:DataTypes.INTEGER,
            allowNull:false,
            unique:true,
            validate:{
                is: /^[0-9]/,   //regex to ensure on digit contains.
                notEmpty:true,  //not empty
                len:[10-15]   //we can adjust based on +91- , 0 etc.
            }
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        lastLogin: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            allowNull: false
        }
    },
    {
        timestamps: true,
        tableName: "users" // Changed table name to "users" (plural form)
    }
);

module.exports = users;
