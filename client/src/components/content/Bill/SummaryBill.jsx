import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import StripeCheckout from "react-stripe-checkout";
import {
  ButtonStyleSummary,
  SummaryItemPriceStyle,
  SummaryItemStyle,
  SummaryItemTextStyle,
  SummaryStyle,
  SummaryTitleStyle,
} from "../../../styles/content.style/Bill.style/summaryBill.style";
import { useEffect, useState } from "react";
import { userRequest } from "../../../requestMethods";
const SummaryBill = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const nav = useNavigate();
  const totalAmount = useSelector(
    (state) => state.entities.cart.cartTotalAmount
  );
  const cart = useSelector((state) => state.entities.cart);
  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest
          .post("/checkout/payment", {
            tokenId: stripeToken.id,
            amount: 500,
          })
          .then(() => nav("/checkout"));
      } catch (error) {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, totalAmount, nav]);
  return (
    <SummaryStyle>
      <SummaryTitleStyle>ORDER SUMMARY</SummaryTitleStyle>
      <SummaryItemStyle>
        <SummaryItemTextStyle>Subtotal</SummaryItemTextStyle>
        <SummaryItemPriceStyle>$ 80</SummaryItemPriceStyle>
      </SummaryItemStyle>
      <SummaryItemStyle>
        <SummaryItemTextStyle>Estimated Shipping</SummaryItemTextStyle>
        <SummaryItemPriceStyle>$ 0</SummaryItemPriceStyle>
      </SummaryItemStyle>
      <SummaryItemStyle>
        <SummaryItemTextStyle>Shipping Discount</SummaryItemTextStyle>
        <SummaryItemPriceStyle>$ 0</SummaryItemPriceStyle>
      </SummaryItemStyle>
      <SummaryItemStyle type="total">
        <SummaryItemTextStyle>Total</SummaryItemTextStyle>
        <SummaryItemPriceStyle>$ {totalAmount}</SummaryItemPriceStyle>
      </SummaryItemStyle>
      <StripeCheckout
        name="XY-Store"
        image="img"
        billingAddress
        shippingAddress
        description={`your total is ${totalAmount}$`}
        amount={totalAmount * 100}
        token={onToken}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <ButtonStyleSummary>CHECKOUT NOW</ButtonStyleSummary>
      </StripeCheckout>
    </SummaryStyle>
  );
};

export default SummaryBill;
