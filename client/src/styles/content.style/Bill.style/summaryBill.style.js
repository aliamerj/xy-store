import { styled } from "@mui/material/styles";
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
