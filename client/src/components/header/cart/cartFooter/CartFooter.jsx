import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PayButton from "../../../content/checkout/PayButton";

const CartFooter = ({ cartState }) => {
  const {
    showDrawer: [showDrawer, setShowDrawer],
  } = { showDrawer: useState(0), ...(cartState || {}) };
  const nav = useNavigate();
  const cart = useSelector((state) => state.entities.cart);
  return (
    <>
      <Stack spacing={2} direction="column" marginX={4}>
        <PayButton
          buttonStyle={
            <Stack spacing={2} direction="column" marginX={0}>
              <Button variant="contained">
                Checkout Now (${cart.cartTotalAmount})
              </Button>
            </Stack>
          }
        />
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
