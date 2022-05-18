import styled from "@emotion/styled";

export const AppBarStyle = styled("div")(() => ({
  boxShadow: "none",
  borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  height: "75px",
}));
export const Wrapper = styled("div")(() => ({
  padding: "10px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const Left = styled("div")(() => ({
  flex: 1,
  justifyContent: "flex-start",
  //border: "2px solid",
}));
export const Right = styled("div")(() => ({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  // border: "2px solid",
  // borderColor: "blue",
}));
export const Center = styled("div")(() => ({
  flex: 1,
}));
export const Language = styled("span")(() => {});

export const TitleStyle = styled("div")(() => ({
  flexGrow: 1,
  alignItems: "center",
  display: "flex",
  textDecoration: "none",
}));
export const MenuButtonStyle = styled("div")(() => ({}));
export const GrowStyle = styled("div")(() => ({
  flexGrow: 1,
}));
export const Search = styled("div")(() => ({
  flexGrow: 1,
}));
