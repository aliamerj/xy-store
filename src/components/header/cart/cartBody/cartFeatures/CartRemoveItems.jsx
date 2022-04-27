import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { REMOVE_ALL_FROM_CART } from "../../../../store/cart.store/cartSlice";

const CartRemoveItems = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <>
      <IconButton
        onClick={() => dispatch(REMOVE_ALL_FROM_CART(product))}
        aria-label="remove from cart"
      >
        <CloseIcon />
      </IconButton>
    </>
  );
};
export default CartRemoveItems;
