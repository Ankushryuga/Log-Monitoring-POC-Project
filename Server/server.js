const app = require("../app");
const ip = require("ip");
const { Configurations } = require("../Configurations/config");
const logger = require('../Logger/fileLogger');
const cluster = require('cluster');
const http = require('http');
const https = require('https');
const numCPUs = require('os').cpus().length;
const socketIO = require('socket.io');

// Global agent configuration for HTTP and HTTPS
const httpAgent = new http.Agent({
  keepAlive: true,
  maxSockets: Configurations.maxSockets || Infinity
});

const httpsAgent = new https.Agent({
  keepAlive: true,
  maxSockets: Configurations.maxSockets || Infinity
});

if (cluster.isMaster) {
  logger.info(`Master ${process.pid} is running`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    logger.error(`Worker ${worker.process.pid} died`);
    logger.info(`Forking a new worker`);
    cluster.fork();
  });
} else {
  // Exception handling within the worker
  process.on('uncaughtException', (err) => {
    logger.error(`An error occurred on worker ${process.pid}:`, err);
    process.exit(1); // Exit the worker
  });

  // Determine protocol based on configuration
  const protocol = Configurations.serverConnection.protocol === 'https' ? https : http;
  const serverOptions = protocol === https ? { agent: httpsAgent } : { agent: httpAgent };

  // Create server with the selected protocol and options
  const server = protocol.createServer(serverOptions, app);

  // Start the server
  const port = Configurations.serverConnection.port;
  server.listen(port, Configurations.serverConnection.host, () => {
    logger.info(`Server is running on ${protocol.globalAgent.protocol}//${Configurations.serverConnection.host}:${port}`);
    console.log(`Server is running on ${protocol.globalAgent.protocol}//${Configurations.serverConnection.host}:${port}`);
  });

  // Attach socket.io to the server
  const io = socketIO(server);
  io.on('connection', (socket) => {
    logger.info('A user connected');
    // Handle socket.io events here
  });

  console.log(`Worker ${process.pid} started`);
}
