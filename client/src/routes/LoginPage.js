import LoginForm from "../components/content/Forms/loginForm/LoginForm";
import { Alert, Typography } from "@mui/material";
import Logo from "../components/header/navbar/Logo";
import {
  ContainerStyle,
  WrapperStyle,
  TitleContaintertStyle,
  FormTitleStyle,
  ContainerFormStyle,
  WrapperFormStyle,
} from "../styles/content.style/form.style/form.style";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RELOAD_ERROR_MESSAGE } from "../store/auth.store/authSlice";

const LoginInPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(RELOAD_ERROR_MESSAGE());
  }, []);
  const errorMessage = useSelector((state) => state.entities.auth.errorMessage);
  return (
    <>
      <ContainerStyle>
        <WrapperStyle>
          <ContainerFormStyle>
            <WrapperFormStyle>
              <TitleContaintertStyle>
                <Logo />
              </TitleContaintertStyle>
              <FormTitleStyle>
                <Typography component="span" variant="h6" marginBottom={2}>
                  Sign in to your account
                </Typography>
              </FormTitleStyle>
              {errorMessage ? (
                <Typography marginBottom={2} component="span">
                  <Alert severity="error">{errorMessage}</Alert>
                </Typography>
              ) : null}
              <LoginForm />
            </WrapperFormStyle>
          </ContainerFormStyle>
        </WrapperStyle>
      </ContainerStyle>
    </>
  );
};

export default LoginInPage;
