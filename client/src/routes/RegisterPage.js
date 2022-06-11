import { Typography } from "@mui/material";
import Logo from "../components/header/navbar/Logo";
import RegisterForm from "../components/content/Forms/RegisterForm/RegisterForm";
import { Alert } from "@mui/material";
import { useSelector } from "react-redux";

import {
  ContainerStyle,
  WrapperStyle,
  TitleContaintertStyle,
  FormTitleStyle,
  ContainerFormStyle,
  WrapperFormStyle,
} from "../styles/content.style/form.style/form.style";
const RegisterPage = () => {
  const auth = useSelector((state) => state.entities.auth.error);
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
                <Typography variant="h6">REGISTER</Typography>
              </FormTitleStyle>
              {auth ? (
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
