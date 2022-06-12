const { register, login, refrechToken, signout } = require("./auth.controller");
const validatorMiddleware = require("../../middleware/validator.middleware");
const { validateRegister, validateLogin } = require("../../modules/validaters");
const { authRefreshToken, auth } = require("../../middleware/authentications");

const route = require("express").Router();

route.post("/register", validatorMiddleware(validateRegister), register);
route.post("/login", validatorMiddleware(validateLogin), login);
route.post("/refresh", authRefreshToken, refrechToken);
route.delete("/signout", auth, signout);

module.exports = route;
