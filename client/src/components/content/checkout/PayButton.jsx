import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../../../requestMethods";

const PayButton = ({ buttonStyle }) => {
  const products = useSelector((state) => state.entities.cart.cartItems);
  const totalAmount = useSelector(
    (state) => state.entities.cart.cartTotalAmount
  );
  const makePayment = async (token) => {
    const body = {
      totalAmount,
      token,
      products,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const res = await userRequest.post("/paymant", {
        headers: headers,
        body,
      });
      return console.log(res);
    } catch (err) {
      return console.log(err);
    }
  };

  return (
    <StripeCheckout
      name="XY-Store"
      image="img"
      billingAddress
      shippingAddress
      description={`your total is ${totalAmount}$`}
      amount={totalAmount * 100}
      token={makePayment}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
      bitcoin
    >
      {buttonStyle}
    </StripeCheckout>
  );
};

export default PayButton;
