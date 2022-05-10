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

const validateCreateProduct = (product) => {
  const schema = Joi.object({
    title: Joi.string().max(40).min(5).required(),
    description: Joi.string().max(100).min(20).required(),
    image: Joi.string().required(),
    categories: Joi.array().required(),
    size: Joi.string(),
    color: Joi.string(),
    price: Joi.number().required(),
  });
  return schema.validate(product);
};

module.exports = {
  validateLogin,
  validateRegister,
  validateCreateProduct,
};
