const express = require("express");
const {
  createOrder,
  updateOrder,
  deleteOrder,
  getAllOrder,
  getUserOrder,
} = require("./order.controller");

const route = express.Router();
route.post("/", createOrder);
route.put("/:id", updateOrder);
route.delete("/:id", deleteOrder);
route.get("/", getAllOrder);
route.get("/find/:userId", getUserOrder);

module.exports = route;
