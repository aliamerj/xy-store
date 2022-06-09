import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import handleCheckout from "../../../../utils/buttonHandler/checkoutButton";

const CartFooter = ({ cartState }) => {
  const {
    showDrawer: [showDrawer, setShowDrawer],
  } = { showDrawer: useState(0), ...(cartState || {}) };
  const nav = useNavigate();
  const cart = useSelector((state) => state.entities.cart);
  return (
    <>
      <Stack spacing={2} direction="column" marginX={4}>
        <Button
          onClick={() => {
            nav("/checkout");
            setShowDrawer(false);
            handleCheckout(cart.cartItems);
          }}
          variant="contained"
        >
          Checkout Now (${cart.cartTotalAmount})
        </Button>
        <Button
          onClick={() => {
            nav("/cart");
            setShowDrawer(false);
          }}
          variant="outlined"
        >
          view cart
        </Button>
      </Stack>
    </>
  );
};

export default CartFooter;
