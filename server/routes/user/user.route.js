const express = require("express");
const { auth } = require("../../midleware/authentications");
const {accessToHisOwnData} = require("../../midleware/authorizations");
const { getUser, changeInfo } = require("./user.controller");

const route = express.Router();

// user : can get his won info {email , username}
// user : can change his won info
route.get("/:id", [auth, accessToHisOwnData], getUser);
route.put("/:id", [auth, accessToHisOwnData], changeInfo);

module.exports = route;
