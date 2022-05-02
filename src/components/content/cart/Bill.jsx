import { Card, Box, CardActions, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Bill = () => {
  const getCartItems = useSelector(
    (state) => state.entities.cart.cartTotalAmount
  );
  const nav = useNavigate();
  return (
    <Box display="flex" justifyContent="flex-end" marginY="auto">
      <Card sx={{ display: "inline", minWidth: 350 }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Total:_ _ _ ${getCartItems}
        </Typography>
        <CardActions>
          <Button onClick={() => nav("/checkout")} variant="contained">
            Checkout{" "}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};
export default Bill;
