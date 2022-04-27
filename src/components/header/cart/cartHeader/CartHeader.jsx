import { Divider, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const CartHeader = () => {
  const getCartItems = useSelector((state) => state.entities.cart.cartItems);
  return (
    <>
      <Box sx={{ width: 340, px: 2, margin: 2, marginTop: 3 }} component="div">
        <Typography display="inline-block" variant="h4" component="span">
          <ShoppingCartIcon />
          <Typography
            variant="h5"
            fontSize={23}
            component="h6"
            sx={{ display: "inline-block" }}
            px={2}
          >
            {getCartItems.length} item
          </Typography>
        </Typography>
      </Box>
      <Divider />
      <Divider />
    </>
  );
};

export default CartHeader;
