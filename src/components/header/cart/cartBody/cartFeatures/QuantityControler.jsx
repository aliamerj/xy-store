import React from "react";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { IconButton } from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useDispatch } from "react-redux";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
} from "../../../../store/cart.store/cartSlice";

const QuantityControler = ({ item }) => {
  const dispatch = useDispatch();
  let displayButton = false;

  const handleIncreaseQuantity = (item) => {
    dispatch(ADD_TO_CART(item));
  };
  const handleDecreaseQuantity = (item) => {
    dispatch(REMOVE_FROM_CART(item));
  };
  if (item.cartQuantity === 1) {
    displayButton = true;
  }
  return (
    <Stack direction="row" marginLeft={15}>
      <IconButton
        aria-label="increase Quantity"
        onClick={() => handleIncreaseQuantity(item)}
      >
        <AddCircleOutlineIcon color="primary" />
      </IconButton>
      <Typography variant="button" component="h6" marginTop={1}>
        {item.cartQuantity}
      </Typography>
      <IconButton
        aria-label="decrease Quantity"
        onClick={() => handleDecreaseQuantity(item)}
        disabled={displayButton}
        color="primary"
      >
        <RemoveCircleOutlineIcon />
      </IconButton>
    </Stack>
  );
};
export default QuantityControler;
