const userRoute = require("../routes/user/user.route");
const authRoute = require("../routes/auth/auth.route");
const productRoute = require("../routes/product/product.route");
const cartRoute = require("../routes/cart/cart.route");
const orderRoute = require("../routes/order/order.route");
const errorMiddleware = require("../middleware/error.middleware");

module.exports = function (app, express) {
  app.use(express.json());
  app.use("/api/", authRoute);
  app.use("/api/user", userRoute);
  app.use("/api/product", productRoute);
  app.use("/api/cart", cartRoute);
  app.use("/api/order", orderRoute);
  app.use(errorMiddleware);
};
