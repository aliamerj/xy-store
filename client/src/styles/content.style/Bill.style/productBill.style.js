import { styled } from "@mui/material/styles";
export const InfoStyle = styled("div")(() => ({
  flex: 3,
}));

export const ProductStyle = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const ProductDetailStyle = styled("div")(() => ({
  flex: 2,
  display: "flex",
}));

export const ImageStyle = styled("img")(() => ({
  width: "200px",
}));

export const DetailsStyle = styled("div")(() => ({
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
}));

export const ProductNameStyle = styled("span")(() => ({}));
export const ProductIdStyle = styled("span")(() => ({}));
export const ProductColorStyle = styled("div")(({ theme, coloritem }) => ({
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  backgroundColor: coloritem,
}));

export const ProductSizeSizeStyle = styled("span")(() => ({}));
export const PriceDetailSizeStyle = styled("div")(() => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const ProductAmountContainerStyle = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
}));

export const ProductAmountStyle = styled("div")(({ theme }) => ({
  fontSize: "24px",
  margin: "5px",
  [theme.breakpoints.down("sm")]: {
    margin: "5px 15px",
  },
}));
export const ProductPriceStyle = styled("div")(({ theme }) => ({
  fontSize: "30px",
  fontWeight: 200,
  [theme.breakpoints.down("sm")]: {
    marginBottom: "20px",
  },
}));

export const HrStyle = styled("hr")(() => ({
  backgroundColor: "#eee",
  border: "none",
  height: "1px",
}));
