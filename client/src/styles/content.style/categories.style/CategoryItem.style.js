import { styled } from "@mui/material/styles";

export const ContainerStyle = styled("div")(() => ({
  flex: 1,
  margin: "3px",
  height: "70vh",
  position: "relative",
}));

export const ImageStyle = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  [theme.breakpoints.down("sm")]: {
    height: "20vh",
  },
}));

export const InfoStyle = styled("div")(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const TitleStyle = styled("h1")(() => ({
  color: "white",
  marginBottom: "20px",
}));

export const ButtonStyle = styled("button")(() => ({
  border: "none",
  padding: "10px",
  backgroundColor: "white",
  color: "gray",
  cursor: "pointer",
  fontWeight: 600,
}));
