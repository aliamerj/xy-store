const register = require("./auth.controller");

const route = require("express").Router();

route.post("/", register);

module.exports = route;
