const { validateCreateOrder } = require("../../modules/validaters");
const _ = require("lodash");
const Order = require("../../modules/Order.module");

const createOrder = async (req, res) => {
  const { error } = validateCreateOrder(req.body);
  if (error) return res.status(422).send(error.details[0].message);
  let orderInfo = _.pick(req.body, [
    "userId",
    "products",
    "amount",
    "address",
    "status",
  ]);
  const newOrder = new Order(orderInfo);

  try {
    const orderSaved = await newOrder.save();
    res.status(201).json({
      userId: orderSaved.userId,
      Products: orderSaved.Products,
      amount: orderSaved.amount,
      address: orderSaved.address,
      status: orderSaved.status,
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateOrder = (req, res) => {
  const { error } = validateCreateOrder(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let orderInfo = _.pick(req.body, ["userId", "products"]);
  Order.findByIdAndUpdate(req.params.id, orderInfo)
    .then((orderUpdated) =>
      res.status(200).json({
        userId: orderUpdated.userId,
        Products: orderUpdated.Products,
        amount: orderUpdated.amount,
        address: orderUpdated.address,
        status: orderUpdated.status,
      })
    )
    .catch((error) => res.status(404).json(error.message));
};

const deleteOrder = (req, res) => {
  Order.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("Order has been deleted..."))
    .catch((error) => res.status(404).json(error.message));
};
const getAllOrder = (req, res) => {
  Order.find({})
    .sort({ date: -1 })
    .then((orders) => res.status(200).json(orders))
    .catch((error) => res.status(404).json(error.message));
};
const getUserOrder = (req, res) => {
  Order.findOne({ userId: req.params.userId })
  .then((order) => {
    if (order) return res.status(200).json(order);
    else {
      throw error();
    }
  })
  .catch((e) => res.status(404).json(e.message));
};

module.exports = {
  createOrder,
  updateOrder,
  deleteOrder,
  getAllOrder,
  getUserOrder,
};
