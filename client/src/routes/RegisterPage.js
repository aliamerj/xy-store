import { Typography } from "@mui/material";
import React from "react";
import RegisterForm from "../components/content/Forms/RegisterForm/RegisterForm";
const RegisterPage = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        REGISTER
      </Typography>

      <RegisterForm />
    </>
  );
};

export default RegisterPage;
