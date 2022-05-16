const express = require("express");
const validatorMiddleware = require("../../midleware/validator.middleware");
const { validateCreateOrder } = require("../../modules/validaters");
const {
  createOrder,
  updateOrder,
  deleteOrder,
  getAllOrder,
  getUserOrder,
} = require("./order.controller");

const route = express.Router();
route.post("/", [validatorMiddleware(validateCreateOrder),createOrder]); 
route.put("/:id",[validatorMiddleware(validateCreateOrder)],updateOrder); 
route.delete("/:id", deleteOrder); 
route.get("/", getAllOrder); 
route.get("/find/:userId", getUserOrder);

module.exports = route;
