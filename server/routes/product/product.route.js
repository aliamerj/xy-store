const express = require("express");
const validatorMiddleware = require("../../middleware/validator.middleware");
const { validateCreateProduct } = require("../../modules/validaters");
const {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProduct,
  getProdct,
} = require("./product.controller");

const route = express.Router();
// uesr and vister : can getAllProduct and getProdct
// admin can do the (create, update, delete,) + user authoriz.
route.post("/", [validatorMiddleware(validateCreateProduct), createProduct]);
route.put("/:id", [validatorMiddleware(validateCreateProduct), updateProduct]);
route.delete("/:id", deleteProduct); //tested
route.get("/", getAllProduct); //tested
route.get("/:id", getProdct); // tested

module.exports = route;
