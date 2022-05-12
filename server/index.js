const express = require("express");
const app = express();
require("dotenv").config();
require("./startup/db")();
app.use(express.json());
require("./startup/routes")(app);
const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  console.log(`Listening on port ${port}...`)
);
module.exports = server;
