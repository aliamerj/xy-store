const { connect } = require("mongoose");
const winston = require("winston");
const configDb = require("config");
const DB = configDb.get("db");

module.exports = function () {
  connect(DB).then((DB) =>
    winston.info(`connected to ${DB.connection.name}.. :} `)
  );
};
