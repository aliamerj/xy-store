import { styled } from "@mui/material/styles";
//body
export const ContainerStyle = styled("div")(({ theme }) => ({
  //body
  minHeight: "100%",
  backgroundColor: "#ffffff",
  //login-root
  background: "#fff",
  display: "flex",
  width: "100%",
  overflow: "hidden",
}));
export const WrapperStyle = styled("div")(({ theme }) => ({
  //box-root
  boxSizing: "border-box",
  minHeight: "100vh",
  // padding-top--24
  paddingTop: "24px",
  // flex-flex
  display: "flex",
  //
  msFlexDirection: "column",
  flexDirection: "column",
  flexGrow: 1,
  zIndex: 9,
}));

export const TitleContaintertStyle = styled("div")(() => ({
  // padding-bottom--24
  paddingBottom: "25px",
  // flex-flex
  display: "flex",
  // flex-justifyContent--center
  justifyContent: "center",
}));

export const ContainerFormStyle = styled("div")(() => ({
  //formbg
  margin: "-7px auto",
  width: "100%",
  maxWidth: "600px",
  borderRadius: "5px",
  boxShadow: "#3c4257 0px 5px 8px 0px",
  marginBottom: "50px",
}));
export const WrapperFormStyle = styled("div")(() => ({
  padding: "48px",
}));
export const FormTitleStyle = styled("div")(() => ({
  marginBottom: "15px",
}));
