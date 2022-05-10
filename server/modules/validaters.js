const Joi = require("joi");

const validateLogin = (uesr) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).max(255).required(),
  });
  return schema.validate(uesr);
};
const validateRegister = (user) => {
  const schema = Joi.object({
    username: Joi.string().min(5).max(20).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(255).required(),
  });
  return schema.validate(user);
};

module.exports = {
  validateLogin,
  validateRegister,
};
