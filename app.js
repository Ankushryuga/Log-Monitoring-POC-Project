const dotenv=require('dotenv');
dotenv.config(('./Configurations/config.env'));
const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const logger = require('./Logger/fileLogger');
const asyncErrorMiddleware=require('./MiddleWares/handleCrash');
const app=express();
const registerRouter=require("./Routes/registerRoute");
const loginRouter=require("./Routes/loginLogOutRoute");
const fileRouter=require("./Routes/filesRoute");
const infoRouter=require("./Routes/logRoute");

app.use(express.json());
// app.use(asyncErrorMiddleware);
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));

const corsOptions = {
    origin:'*',
    // origin: 'http://yourclientorigin.com', // replace with the origin of your client application
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};


// Middleware configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(asyncErrorMiddleware);


app.use("/", registerRouter);
app.use("/", loginRouter);
app.use("/", fileRouter);
app.use("/", infoRouter);
module.exports=app;