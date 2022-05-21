import { styled } from "@mui/material/styles";

export const ContainerStyle = styled("div")(() => ({}));
export const WrapperStyle = styled("div")(({ theme }) => ({
  padding: "50px",
  [theme.breakpoints.down("sm")]: {
    padding: "10px",
  },
}));

export const BottomStyle = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));
