const express = require("express");
const { auth } = require("../../midleware/authentications");
const { verifyAuthorization } = require("../../midleware/authorizations");
const { getUsers, changeInfo } = require("./user.controller");

const route = express.Router();

route.get("/", getUsers);
route.put("/:id", [auth, verifyAuthorization], changeInfo);
// todo : change info function

module.exports = route;
