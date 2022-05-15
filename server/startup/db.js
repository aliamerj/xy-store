const { connect } = require("mongoose");

module.exports = function (DB) {
  connect(DB)
    .then((DB) => console.log(`connected to ${DB.connection.name}.. :} `))
    .catch((err) => console.error("could not connect to mongoDB...", err));
};
