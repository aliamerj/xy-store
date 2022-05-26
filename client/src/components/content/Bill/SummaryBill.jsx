import { useSelector } from "react-redux";
import {
  ButtonStyleSummary,
  SummaryItemPriceStyle,
  SummaryItemStyle,
  SummaryItemTextStyle,
  SummaryStyle,
  SummaryTitleStyle,
} from "../../../styles/content.style/Bill.style/summaryBill.style";
const SummaryBill = () => {
  const getCartItems = useSelector(
    (state) => state.entities.cart.cartTotalAmount
  );
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
        <SummaryItemPriceStyle>$ {getCartItems}</SummaryItemPriceStyle>
      </SummaryItemStyle>
      <ButtonStyleSummary>CHECKOUT NOW</ButtonStyleSummary>
    </SummaryStyle>
  );
};

export default SummaryBill;
