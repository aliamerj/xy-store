import { Typography } from "@mui/material";
import Logo from "../components/header/navbar/Logo";
import RegisterForm from "../components/content/Forms/RegisterForm/RegisterForm";
import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import {
  ContainerStyle,
  WrapperStyle,
  TitleContaintertStyle,
  FormTitleStyle,
  ContainerFormStyle,
  WrapperFormStyle,
} from "../styles/content.style/form.style/form.style";
import { RELOAD_ERROR_MESSAGE } from "../store/auth.store/authSlice";
import { useEffect } from "react";
const RegisterPage = () => {
  const errorMessage = useSelector((state) => state.entities.auth.errorMessage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(RELOAD_ERROR_MESSAGE());
  }, [window.location.href]);
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
                <Typography variant="h6">REGISTER</Typography>
              </FormTitleStyle>
              {errorMessage ? (
                <Typography marginBottom={2} component={"div"}>
                  <Alert severity="error">{errorMessage}</Alert>
                </Typography>
              ) : null}

              <RegisterForm />
            </WrapperFormStyle>
          </ContainerFormStyle>
        </WrapperStyle>
      </ContainerStyle>
    </>
  );
};

export default RegisterPage;
