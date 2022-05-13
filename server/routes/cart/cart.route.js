const express = require("express");
const {
  createCart,
  updateCart,
  deleteCart,
  getAllCart,
  getUserCart,
} = require("./cart.controller");

const route = express.Router();
route.post("/", createCart); //tested
route.put("/:id", updateCart); //tested
route.delete("/:id", deleteCart); // tested
route.get("/", getAllCart); // tested
route.get("/find/:userId", getUserCart); //tested

module.exports = route;
