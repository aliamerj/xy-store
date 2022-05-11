const express = require("express");
const {createPayment} = require("./stripe.controller");

const route = express.Router();
route.post("/payment", createPayment);

module.exports = route;
