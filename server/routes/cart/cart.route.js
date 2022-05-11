const express = require("express");
const {
  createCart,
  updateCart,
  deleteCart,
  getAllCart,
  getUserCart,
} = require("./cart.controller");

const route = express.Router();
route.post("/", createCart);
route.put("/:id", updateCart);
route.delete("/:id", deleteCart);
route.get("/", getAllCart);
route.get("/find/:id", getUserCart);

module.exports = route;
