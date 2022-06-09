const express = require("express");
const { auth } = require("../../middleware/authentications");
const { accessToHisOwnData } = require("../../middleware/authorizations");
const { createcheckoutSession } = require("./stripe.controller");
const route = express.Router();

route.post("/", createcheckoutSession);

module.exports = route;
