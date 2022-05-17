const express = require("express");
const { auth } = require("../../middleware/authentications");
const { accessToHisOwnData } = require("../../middleware/authorizations");
const validatorMiddleware = require("../../middleware/validator.middleware");
const { validateRegister } = require("../../modules/validaters");
const { getUser, changeInfo } = require("./user.controller");

const route = express.Router();

route.get("/:id", [auth, accessToHisOwnData], getUser);
route.put(
  "/:id",
  [auth, accessToHisOwnData, validatorMiddleware(validateRegister)],
  changeInfo
);

module.exports = route;
