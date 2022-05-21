import { styled } from "@mui/material/styles";
export const ContainerStyle = styled("div")(({ theme }) => ({
  flex: 1,
  marginTop: 6,
  marginBottom: 7,
  flexDirection: "column",

  [theme.breakpoints.up("sm")]: {
    display: "flex",
    alignItems: "center",
    marginLeft: 6,
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: 4,
  },
}));
