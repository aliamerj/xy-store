const express = require("express");
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
route.post("/", createProduct); // tested
route.put("/:id", updateProduct); // tested
route.delete("/:id", deleteProduct); //tested
route.get("/", getAllProduct); //tested
route.get("/:id", getProdct); // tested

module.exports = route;
