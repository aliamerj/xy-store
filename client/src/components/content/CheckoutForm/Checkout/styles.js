import { spacing, styled } from "@mui/system";

export const ToolbarStyle = styled("div")(({ theme }) => theme.mixins);

export const LayoutStyle = styled("main")(({ theme }) => ({
  marginTop: "5%",
  width: "auto",
  marginLeft: 2,
  marginRight: 2,

  [theme.breakpoints.up(600 + 2 * 2)]: {
    width: 800,
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export const PaperStyle = styled("div")(({ theme }) => ({
  marginTop: 3,
  marginBottom: 3,
  padding: 2,
  [theme.breakpoints.down("xs")]: {
    width: "100%",
    marginTop: 60,
  },
  [theme.breakpoints.up(600 + 3 * 2)]: {
    marginTop: 6,
    marginBottom: 6,
    padding: 3,
  },
}));

export const StepperStyle = styled("div")({
  padding: spacing(3, 0, 5),
});

export const ButtonStyle = styled("div")({
  marginTop: 3,
  marginLeft: 1,
});
export const DividerStyle = styled("div")({
  margin: "20px 0",
});
export const SpinnerStyle = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
