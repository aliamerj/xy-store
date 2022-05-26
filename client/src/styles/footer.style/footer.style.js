import { styled } from "@mui/material/styles";

export const ContainerStyle = styled("div")(({ theme }) => ({
  display: "flex",
  minHeight: "50px",
  backgroundColor: "#FAF0D7",
  marginTop: "10%",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const LeftStyle = styled("div")(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  padding: "20px",
}));

export const DescriptionStyle = styled("p")(({ theme }) => ({
  margin: "20px 0px",
}));

export const SocialContainerStyle = styled("div")(({ theme }) => ({
  display: "flex",
}));

export const SocialIconStyle = styled("div")(({ theme, colorItem }) => ({
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "20px",
  backgroundColor: colorItem,
}));

export const CenterStyle = styled("div")(({ theme }) => ({
  flex: 1,
  padding: "20px",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const TitleStyle = styled("h3")(({ theme }) => ({
  marginBottom: "30px",
}));

export const ListStyle = styled("ul")(() => ({
  margin: 0,
  padding: 0,
  listStyle: "none",
  display: "flex",
  flexWrap: "wrap",
}));

export const ListItemStyle = styled("li")(() => ({
  width: "50%",
  marginBottom: "10px",
}));

export const RightStyle = styled("div")(({ theme }) => ({
  flex: 1,
  padding: "20px",
  [theme.breakpoints.down("md")]: {
    backgroundColor: "#fff8f8",
  },
}));

export const ContactItemStyle = styled("div")(({ theme }) => ({
  marginBottom: "20px",
  display: "flex",
  alignItems: "center",
}));

export const PaymentStyle = styled("img")(() => ({
  width: "50%",
}));
