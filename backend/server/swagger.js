const swaggerAutogen = require("swagger-autogen")();

const outputFile = "server/common/config/swagger.json";
const endpointsFiles = ["server/server.js"];

swaggerAutogen(outputFile, endpointsFiles);
