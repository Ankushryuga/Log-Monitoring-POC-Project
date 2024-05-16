

// const { json } = require('body-parser');
const { createLogger, format, transports } = require('winston');
require('winston-daily-rotate-file');

const { combine, timestamp, label, printf,json } = format;

// Custom format for log messages
// const logFormat = printf(({ level, message, label, timestamp }) => {
//   return `${timestamp} [${label}] ${level}: ${message}`;
// });

// Configuration for daily rotating log files for info level
const infoRotateTransport = new transports.DailyRotateFile({
  filename: './logs/info-rotate-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  // maxSize: '20m',
  maxFiles: '20d',
  level: 'info'
});

// Configuration for daily rotating log files for error level
const errorRotateTransport = new transports.DailyRotateFile({
  filename: './logs/error-rotate-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  // maxSize: '20m',
  maxFiles: '20d',
  level: 'error'
});


// return createLogger({
//   level: "debug",
//   format: combine(timestamp(), json()),
//   defaultMeta: { service: "user-service" },
//   // Define the transports for logging
//   transports: transportsArray
// });
// };

// Create a logger instance
const logger = createLogger({
  format: combine(
    // label({ label: 'App' }),
    timestamp(),json()
    // logFormat
  ),
  defaultMeta:{service: "user-service"}, 
  transports: [infoRotateTransport, errorRotateTransport]
});

// Handle initialization errors for info logger
infoRotateTransport.on('error', (error) => {
  console.error('Error initializing info logger:', error);
});

// Handle initialization errors for error logger
errorRotateTransport.on('error', (error) => {
  console.error('Error initializing error logger:', error);
});

// Export the logger instance
module.exports = logger;
