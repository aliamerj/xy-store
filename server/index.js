require("express-async-errors");
const logger = require("./startup/logging");
require("dotenv").config();
const express = require("express");

const app = express();

require("./startup/config")();
require("./startup/db")();
require("./startup/routes")(app, express);

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  logger.info(`Listening on port ${port}...`)
);
module.exports = server;
