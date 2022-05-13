const express = require("express");
const {
  createOrder,
  updateOrder,
  deleteOrder,
  getAllOrder,
  getUserOrder,
} = require("./order.controller");

const route = express.Router();
route.post("/", createOrder); // tested
route.put("/:id", updateOrder); // tested
route.delete("/:id", deleteOrder); // testing
route.get("/", getAllOrder); //tested
route.get("/find/:userId", getUserOrder); //test

module.exports = route;
