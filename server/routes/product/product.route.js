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
route.post("/", createProduct);
route.put("/:id", updateProduct);
route.delete("/:id", deleteProduct);
route.get("/", getAllProduct);
route.get("/:id", getProdct);

module.exports = route;
