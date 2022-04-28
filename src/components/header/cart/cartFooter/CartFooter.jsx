import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartFooter = () => {
  const nav = useNavigate();
  const getTotalAmount = useSelector(
    (state) => state.entities.cart.cartTotalAmount
  );
  return (
    <>
      <Stack spacing={2} direction="column" marginX={4}>
        <Button variant="contained">Checkout Now (${getTotalAmount})</Button>
        <Button onClick={() => nav("/cart")} variant="outlined">
          view cart
        </Button>
      </Stack>
    </>
  );
};

export default CartFooter;
