const userRoute = require("../routes/user/user.route");
const authRoute = require("../routes/auth/auth.route");
const productRoute = require("../routes/product/product.route");
const cartRoute = require("../routes/cart/cart.route");
const orderRoute = require("../routes/order/order.route");
const stripeRoute = require("../routes/payments/stripe.route");
const errorMiddleware = require("../middleware/error.middleware");
const patch = require("path");

module.exports = function (app, express) {
  app.use(express.json());
  app.use(express.static(patch.join(__dirname, "..", "public")));

  app.get("/*", (req, res) => {
    res.sendFile(patch.join(__dirname, "..", "public", "index.html"));
  });
  app.use("/", authRoute);
  app.use("/user", userRoute);
  app.use("/product", productRoute);
  app.use("/cart", cartRoute);
  app.use("/order", orderRoute);
  app.use("/paymant", stripeRoute);
  app.use(errorMiddleware);
};
