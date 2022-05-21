import { styled } from "@mui/material/styles";
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
  cursor: type === "filled" ? "pointer" : "default",
  border: type === "filled" && "none",
  backgroundColor: type === "filled" ? "black" : "transparent",
  color: type === "filled" && "white",
  opacity: type === "empty" && 0.6,
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
