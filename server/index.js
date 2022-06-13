require("express-async-errors");
const logger = require("./startup/logging");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const ClIENT_URL = "http://localhost:3000";

const app = express();
app.use(cors({ origin: ClIENT_URL, credentials: true }));
app.use(cookieParser(process.env.COOKIE_KEY));

require("./startup/config")();
require("./startup/db")();
require("./startup/routes")(app, express);

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  logger.info(`Listening on port ${port}...`)
);
module.exports = server;
