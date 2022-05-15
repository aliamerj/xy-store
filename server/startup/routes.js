const userRoute = require("../routes/user/user.route");
const authRoute = require("../routes/auth/auth.route");
const productRoute = require("../routes/product/product.route");
const cartRoute = require("../routes/cart/cart.route");
const orderRoute = require("../routes/order/order.route");

module.exports = function (app) {
  app.use("/api/", authRoute); // testing
  app.use("/api/user", userRoute); // testing
  app.use("/api/product", productRoute); //tested
  app.use("/api/cart", cartRoute); // tested
  app.use("/api/order", orderRoute); //tested
};
