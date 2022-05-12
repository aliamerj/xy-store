const { connect } = require("mongoose");
const configDb = require("config");

module.exports = function () {
  const DB = configDb.get("db");
  connect(DB)
    .then(() => console.log(`connected to ${DB}.. :} `))
    .catch((err) => console.error("could not connect to mongoDB...", err));
};
