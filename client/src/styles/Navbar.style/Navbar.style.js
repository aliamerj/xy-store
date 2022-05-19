import styled from "@emotion/styled";

export const ContainerStyle = styled("div")(() => ({
  boxShadow: "none",
  borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  height: "75px",
}));
export const WrapperStyle = styled("div")(() => ({
  padding: "10px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

export const LeftStyle = styled("div")(() => ({
  flex: 1,
  justifyContent: "flex-start",
  //border: "2px solid",
}));
export const RightStyle = styled("div")(() => ({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  // border: "2px solid",
  // borderColor: "blue",
}));
export const CenterStyle = styled("div")(() => ({
  flex: 1,
}));
