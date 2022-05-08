import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { Stack, Typography } from "@mui/material";
const EmptyCart = () => {
  return (
    <Stack
      direction="column"
      alignSelf="center"
      alignItems="center"
      marginY={6}
    >
      <ProductionQuantityLimitsIcon sx={{ fontSize: 200 }} />
      <Typography variant="inherit">Your shopping cart is empty.</Typography>
      <Typography variant="button">Start shopping</Typography>
    </Stack>
  );
};
export default EmptyCart;
