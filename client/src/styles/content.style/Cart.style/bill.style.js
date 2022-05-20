import { styled } from "@mui/material/styles";

export const ContainerStyle = styled("div")(() => ({}));
export const WrapperStyle = styled("div")(({ theme }) => ({
  padding: "20px",
  [theme.breakpoints.down("sm")]: {
    padding: "10px",
  },
}));

export const TitleStyle = styled("h1")(() => ({
  fontWeight: 300,
  textAlign: "center",
}));
export const TopStyle = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "20px",
}));
export const TopButtonStyle = styled("button")(({ theme, type }) => ({
  padding: "10px",
  fontWeight: 600,
  cursor: "pointer",
  border: type === "filled" && "none",
  backgroundColor: type === "filled" ? "black" : "transparent",
  color: type === "filled" && "white",
}));

export const TopTextsStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
export const TopTextStyle = styled("span")(() => ({
  textDecoration: "underline",
  cursor: "pointer",
  margin: "0px 10px",
}));

export const BottomStyle = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

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
export const ProductColorStyle = styled("div")(({ theme, colorItem }) => ({
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  backgroundColor: colorItem,
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

export const SummaryStyle = styled("div")(() => ({
  flex: 1,
  border: "0.5px solid lightgray",
  borderRadius: "10px",
  padding: "20px",
  height: "50vh",
}));

export const SummaryTitleStyle = styled("h1")(() => ({
  fontWeight: 200,
}));

export const SummaryItemStyle = styled("div")(({ theme, type }) => ({
  margin: "30px 0px",
  display: "flex",
  justifyContent: "space-between",
  fontWeight: type === "total" && "500",
  fontSize: type === "total" && "24px",
}));

export const SummaryItemTextStyle = styled("span")(() => ({}));
export const SummaryItemPriceStyle = styled("span")(() => ({}));
export const ButtonStyle = styled("button")(() => ({
  width: "100%",
  padding: "10px",
  backgroundColor: "black",
  color: "white",
  fontWeight: 600,
}));
