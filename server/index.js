const express = require("express");
const configDb = require("config");
const app = express();

require("dotenv").config();
const DB = configDb.get("db");
require("./startup/db")(DB);
app.use(express.json());
require("./startup/routes")(app);
const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);
module.exports = server;
