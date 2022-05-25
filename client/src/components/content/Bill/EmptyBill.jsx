import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ContainerStyle } from "../../../styles/content.style/Bill.style/billEmpty.style";

const EmptyBill = () => {
  const nav = useNavigate();
  return (
    <ContainerStyle>
      <ProductionQuantityLimitsIcon
        sx={{ fontSize: 270, justifyContent: "center" }}
      />
      <Typography variant="inherit" gutterBottom>
        Your shopping cart is empty.
      </Typography>
      <Button
        onClick={() => {
          nav("/");
        }}
        variant="contained"
      >
        go shopping
      </Button>
    </ContainerStyle>
  );
};

export default EmptyBill;
