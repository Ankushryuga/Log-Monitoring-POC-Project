const{createLogger, transports, format, info}=require('winston');
require('winston-daily-rotate-file');
const {label, timestamp, level, combine, printf}=format;


// const { combine, timestamp, label, printf } = format;
const logFormat=printf(({level, timestamp, label, message})=>{
    return `${timestamp} ${label} ${level}: ${message}`;
});
//./logs/info-rotate-%DATE%.log'
/**
 * const infoRotateTransport = new transports.DailyRotateFile({
  filename: './logs/info-rotate-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  // maxSize: '20m',
  maxFiles: '1m',
  level: 'info'
});

 */

const errorFileRotateLogger=new transports.DailyRotateFile(
    {
        filename:'./log/error-rotate-%Date%.log',
        level:'error',
        datePattern:'YYYY-MM-DD',
        zippedArchive:true,
        maxSize:'1k',
        maxFiles:'1d',

    }
);

const infoFileRotateLogger=new transports.DailyRotateFile({
    filename:'./log/info-rotate-%DATE%.log',
    datePattern:'YYYY-MM-DD',
    zippedArchive:true,
    maxFiles: '1m',
    level:'error'
});

const logger=createLogger({
    format:combine(
        label({label:'App'}),
        timestamp,
        logFormat,
    ),
    transports:[
        infoFileRotateLogger, errorFileRotateLogger
    ]
});


module.exports=logger;
