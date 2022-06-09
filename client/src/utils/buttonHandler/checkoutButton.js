const { publicRequest } = require("../../requestMethods");

const handleCheckout = (cartItem) => {
  publicRequest
    .post("/paymant", {
      cartItem,
      amount: 500,
    })
    .then((res) =>
      res.data.url ? (res.data.url = window.location.href) : Error()
    )
    .catch((err) => console.log(err));
};

module.exports = handleCheckout;
