const express = require("express");
const validatorMiddleware = require("../../middleware/validator.middleware");
const { validateCreateCart } = require("../../modules/validaters");
const {
  createCart,
  updateCart,
  deleteCart,
  getAllCart,
  getUserCart,
} = require("./cart.controller");

const route = express.Router();
route.post("/",[validatorMiddleware(validateCreateCart) ,createCart]);
route.put("/:id", [validatorMiddleware(validateCreateCart) ,updateCart]); 
route.delete("/:id", deleteCart); 
route.get("/", getAllCart); 
route.get("/find/:userId", getUserCart); 

module.exports = route;
