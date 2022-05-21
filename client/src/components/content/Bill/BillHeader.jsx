import React from "react";
import { useNavigate } from "react-router-dom";
import {
  TitleStyle,
  TopButtonStyle,
  TopStyle,
  TopTextsStyle,
  TopTextStyle,
} from "../../../styles/content.style/Bill.style/billHeader.style";
import { useSelector } from "react-redux";
const BillHeader = () => {
  const getCartItems = useSelector((state) => state.entities.cart.cartItems);
  const nav = useNavigate();
  const buttonState = getCartItems.length > 0 ? "filled" : "empty";
  const buttonDisplay = buttonState === "empty" ? true : false;
  return (
    <>
      <TitleStyle>YOUR CART</TitleStyle>
      <TopStyle>
        <TopButtonStyle onClick={() => nav("/")}>
          CONTINUE SHOPPING
        </TopButtonStyle>
        <TopTextsStyle>
          <TopTextsStyle>Shopping Bag({getCartItems.length})</TopTextsStyle>
          <TopTextStyle>Your Wishlist (0)</TopTextStyle>
        </TopTextsStyle>
        <TopButtonStyle
          type={buttonState}
          disabled={buttonDisplay}
          onClick={() => nav("/checkout")}
        >
          CHECKOUT NOW
        </TopButtonStyle>
      </TopStyle>
    </>
  );
};

export default BillHeader;
