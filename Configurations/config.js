const ip = require('ip');

exports.Configurations = {
  errorLogId: "file",
  serverConnection: {
    port: 8787,
    host: ip.address(),
    protocol: 'http' // or 'https' if you're using HTTPS
  },
  databaseInformation: {
    username: "ankush",
    password: "123",
    databaseName: "to_do",
    host: "localhost",
    dialect: "mysql"
  },
  maxSockets: 10000, // Maximum number of sockets per host
  httpsOptions: {
    /**
     *  // Define your SSL/TLS options here if using HTTPS
    key: '', // Path to the key file
    cert: '', // Path to the certificate file
    ca: '' // Path to the CA file
     */
  },
  Logger:{
    registerUser:"REGISTER USER API TRIGGER",
    login:"LOGIN API TRIGGER",
    logout:"LOGOUT API TRIGGER"
  },
  APIMessages:{
    common:{
      noData:"No Data Available"
    },
    RegisterUser:{
      invalidInput:"Please provide valid input",
      registered:"user registered",
      alreadyExists:"already exits",
      deleteUser:"Deleted"
    }
  },
  cassandraInformation:{
    //will include cassandra later.
  },
  redisInformation:{
    DEFAULT_EXPIRATION:7200
  }
};
