const { StatusCodes } = require('http-status-codes');
const logger  = require('../Logger/fileLogger');

const asyncErrorMiddleware = async (req, res, next) => {
  try {
    // Wrap the next call in a Promise to catch any asynchronous errors
    await new Promise((resolve, reject) => {
      logger.info(`Error Handler Middleware trigger`);
      next();
      process.nextTick(resolve);
    });
  } catch (err) {
    // Perform any necessary cleanup or logging
    logger.error('ERROR FROM ASYNC MIDDLEWARE: ' + err);
    console.error('An error occurred:', err);
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      status: 0,
      data: 'Internal server error'
    });
  }
};

module.exports = asyncErrorMiddleware;
