import { styled } from "@mui/material/styles";

export const ContainerStyle = styled("div")(() => ({}));
export const WrapperStyle = styled("div")(({ theme }) => ({
  padding: "50px",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    padding: "10px",
    flexDirection: "column",
  },
}));
export const ImgContainerStyle = styled("div")(() => ({
  flex: 1,
}));
export const ImageStyle = styled("img")(({ theme }) => ({
  width: "80%",
  height: "60vh",
  objectFit: "cover",
  [theme.breakpoints.down("md")]: {
    height: "40vh",
  },
}));
export const InfoContainerStyle = styled("div")(({ theme }) => ({
  flex: 1.5,
  padding: "0px 40px",
  marginRight: "4%",
  [theme.breakpoints.down("md")]: {
    padding: "10px",
  },
}));

export const TitleStyle = styled("h1")(() => ({
  fontWeight: "200",
}));
export const DescriptionStyle = styled("P")(() => ({
  margin: "20px 0px",
}));
export const PriceStyle = styled("span")(() => ({
  fontWeight: 100,
  fontSize: "40px",
}));
export const FilterContainerStyle = styled("div")(({ theme }) => ({
  width: "50%",
  margin: "30px 0px",
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
export const FilterStyle = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
}));
export const FilterTitleStyle = styled("span")(() => ({
  fontSize: "20px",
  fontWeight: "200",
}));
export const FilterColorStyle = styled("div")(({ colorItem }) => ({
  width: "20px",
  height: "20px",
  borderRadius: "50%",
  backgroundColor: colorItem,
  margin: "0px 5px",
  cursor: "pointer",
}));
export const FilterSizeStyle = styled("select")(() => ({
  marginLeft: "10px",
  padding: "5px",
}));
export const FilterSizeOptionStyle = styled("option")(() => ({}));
export const AddContainerStyle = styled("div")(({ theme }) => ({
  width: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));
export const AmountContainerStyle = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  fontWeight: "700",
}));
export const AmountStyle = styled("div")(() => ({
  width: "30px",
  height: "30px",
  borderRadius: "10px",
  border: "1px solid teal",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0px 5px",
}));
export const ButtonStyle = styled("div")(() => ({
  padding: "15px",
  border: "2px solid teal",
  backgroundColor: "white",
  cursor: "pointer",
  fontWeight: "500",
  "&:hover": {
    backgroundColor: "#f8f4f4",
  },
}));
