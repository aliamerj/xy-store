const { validateCreateCart } = require("../../modules/validaters");
const _ = require("lodash");
const Cart = require("../../modules/cart.module");

const createCart = async (req, res) => {
  const { error } = validateCreateCart(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let cartInfo = _.pick(req.body, ["userId", "products"]);
  const newcart = new cart(cartInfo);

  try {
    const cartSaved = await newcart.save();
    res.status(201).json({
      userId: cartSaved.userId,
      Products: cartSaved.Products,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateCart = (req, res) => {
  const { error } = validateCreateCart(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let cartInfo = _.pick(req.body, ["userId", "products"]);
  Cart.findByIdAndUpdate(req.params.id, cartInfo)
    .then((cartUpdated) =>
      res.status(200).json({
        userId: cartUpdated.userId,
        Products: cartUpdated.Products,
      })
    )
    .catch((error) => res.status(500).json(error.message));
};

const deleteCart = (req, res) => {
  Cart.findByIdAndDelete(req.params.id)
    .then(res.status(204).json("cart has been deleted..."))
    .catch((error) => res.status(500).json(error.message));
};
const getAllCart = (req, res) => {
  Cart.find({})
    .sort({ date: -1 })
    .then((carts) => res.status(200).json(carts))
    .catch((error) => res.status(404).json(error.message));
};
const getUserCart = (req, res) => {
  Cart.findOne({ userId: req.params.userId })
    .then((carts) => res.status(200).json(carts))
    .catch((error) => res.status(404).json(error.message));
};

module.exports = {
  createCart,
  updateCart,
  deleteCart,
  getAllCart,
  getUserCart,
};
