import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CartFooter = ({ cartState }) => {
  const {
    showDrawer: [showDrawer, setShowDrawer],
  } = { showDrawer: useState(0), ...(cartState || {}) };
  const nav = useNavigate();
  const getTotalAmount = useSelector(
    (state) => state.entities.cart.cartTotalAmount
  );
  return (
    <>
      <Stack spacing={2} direction="column" marginX={4}>
        <Button
          onClick={() => {
            nav("/checkout");
            setShowDrawer(false);
          }}
          variant="contained"
        >
          Checkout Now (${getTotalAmount})
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
