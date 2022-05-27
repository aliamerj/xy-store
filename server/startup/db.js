const { connect } = require("mongoose");
const logger = require("../startup/logging");
const configDb = require("config");
const DB = configDb.get("db");

module.exports = function () {
  connect(DB).then((DB) =>
    logger.info(`connected to ${DB.connection.name}.. :} `)
  );
};
