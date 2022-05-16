const { register, login } = require("./auth.controller");
const validatorMiddleware = require("./../../midleware/validator.middleware");
const { validateRegister, validateLogin } = require("../../modules/validaters");

const route = require("express").Router();

route.post("/register", validatorMiddleware(validateRegister), register);
route.post("/login", validatorMiddleware(validateLogin), login);

module.exports = route;
