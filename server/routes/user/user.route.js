const express = require("express");
const { auth } = require("../../midleware/authentications");
const { verifyAuthorization } = require("../../midleware/authorizations");
const getUsers = require("./user.controller");

const route = express.Router();

route.get("/", getUsers);
route.put("/:id", [auth, verifyAuthorization]);
// todo : change info function

module.exports = route;
