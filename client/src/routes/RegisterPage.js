import { Typography } from "@mui/material";
import Logo from "../components/header/navbar/Logo";
import RegisterForm from "../components/content/Forms/RegisterForm/RegisterForm";
import {
  ContainerStyle,
  WrapperStyle,
  TitleContaintertStyle,
  FormTitleStyle,
  ContainerFormStyle,
  WrapperFormStyle,
} from "../styles/content.style/form.style/form.style";
const RegisterPage = () => {
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
              <RegisterForm />
            </WrapperFormStyle>
          </ContainerFormStyle>
        </WrapperStyle>
      </ContainerStyle>
    </>
  );
};

export default RegisterPage;
