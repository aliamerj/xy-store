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
    firstName: Joi.string().min(2).max(10).required(),
    lastName: Joi.string().min(3).max(10).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(255).required(),
    country: Joi.string().required(),
    city: Joi.string().required(),
    address1: Joi.string().min(5).max(50),
    address2: Joi.string().min(5).max(50),
    zip: Joi.number().required(),
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
const validateCreateCart = (cart) => {
  const schema = Joi.object({
    userId: Joi.string().required(),
    products: Joi.array(),
  });
  return schema.validate(cart);
};
const validateCreateOrder = (order) => {
  const schema = Joi.object({
    userId: Joi.string().required(),
    products: Joi.array(),
    amount: Joi.number().required(),
    address: Joi.object().required(),
    status: Joi.string(),
  });
  return schema.validate(order);
};

module.exports = {
  validateLogin,
  validateRegister,
  validateCreateProduct,
  validateCreateCart,
  validateCreateOrder,
};
