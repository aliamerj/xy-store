const configDb = require("config");
module.exports = function () {
  if (!configDb.get("db")) {
    throw new TypeError("FATAL ERROR : DB KEY is not defined");
  }
};
