const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

const createcheckoutSession = async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: res.body,
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/cart`,
  });

  res.send({ url: session.url });
};
module.exports = {
  createcheckoutSession,
};
