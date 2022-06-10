const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const uuid = require("uuid");
const DOMAIN = "http://localhost:5000";
const createcheckoutSession = async (req, res) => {
  const { products, token, totalAmount } = req.body;
  const idempontencyKey = uuid();
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: totalAmount * 100,
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${DOMAIN}/success.html`,
    cancel_url: `${DOMAIN}/cancel.html`,
  });

  res.redirect(303, session.url);
};
module.exports = {
  createcheckoutSession,
};
