import {
  BottomStyle,
  ContainerStyle,
  WrapperStyle,
} from "../../../styles/content.style/Bill.style/bill.style";
import BillHeader from "./BillHeader";
import ProductsBill from "./ProductsBill";
import SummaryBill from "./SummaryBill";
import { useSelector } from "react-redux";
import EmptyBill from "./EmptyBill";

const Bill = () => {
  const CartItems = useSelector((state) => state.entities.cart.cartItems);
  return (
    <ContainerStyle>
      <WrapperStyle>
        <BillHeader />
        {CartItems.length !== 0 ? (
          <BottomStyle>
            <ProductsBill />
            <SummaryBill />
          </BottomStyle>
        ) : (
          <BottomStyle>
            <EmptyBill />
          </BottomStyle>
        )}
      </WrapperStyle>
    </ContainerStyle>
  );
};
export default Bill;
{
  /* <Box display="flex" justifyContent="flex-end" marginY="auto">
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
</Box> */
}
