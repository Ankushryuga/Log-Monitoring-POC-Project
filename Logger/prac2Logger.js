// const {createLogger, transports, format}=require('winston');
// require('winston-daily-rotate-file');
// const {timestamp, label, printf, combine}=format;



// const logFormatting=printf(({label, level, timestamp, message})=>{
//     return `${timestamp} [${label}] ${level}: ${message}`;
// });


// const infoFileRotateLogger=new transports.DailyRotateFile({
//     filename:'./logs/info-rotate-%DATE%.log',
//     // level: 'info',
//     // maxFiles:'1d',
//     // datePattern:'YYYY-MM-DD',
//     // zippedArchive:true,
//     // maxSize:'1k'
//     datePattern:'YYYY-MM-DD',
//     zippedArchive:true,
//     maxFiles:'1m',
//     level:'info'
// });

// const errorFileLoggerRotate=new transports.DailyRotateFile({
//     filename:'./logs/error-rotate-%DATE%.log',
//     datePattern:'YYYY-MM-DD',
//     zippedArchive:true,
//     maxFiles:'1m',
//     level:'error'
// });



// const logger=createLogger({
//     format:combine(
//         label({label: 'APP' }),
//         timestamp(),
//         logFormatting
//     ),
//     transports:[infoFileRotateLogger, errorFileLoggerRotate]
// });

// infoFileRotateLogger.on('error', (error)=>{
//     console.log(`Error occurded while initializing info logger, ${error}`);
// });

// errorFileLoggerRotate.on('error', (error)=>{
//     console.log(`Error occured while initializing error logger ${error}`);
// });

// module.exports=logger;