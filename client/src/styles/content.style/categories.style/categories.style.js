import { styled } from "@mui/material/styles";

export const ContainerStyle = styled("div")(({ theme }) => ({
  display: "flex",
  padding: "20px",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    padding: "0px",
    flexDirection: "column",
  },
}));
