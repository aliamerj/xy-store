import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "../utils/FormInput";
import SendIcon from "@mui/icons-material/Send";
import registerSchema from "./RegisterValidation";
import { Grid, Input, Typography, Select, TextField } from "@mui/material";
import CountryInput from "../utils/CountryInput";
import Button from "@mui/material/Button";
import {
  BoundariesStyle,
  ContainerStyle,
  WrapperStyle,
} from "../../../../styles/content.style/form.style/form.style";

const RegisterForm = () => {
  const methods = useForm({
    resolver: yupResolver(registerSchema),
  });
  const { handleSubmit } = methods;
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <FormProvider {...methods}>
        <FormInput required name="firstName" label="First name" />
        <FormInput required name="lastName" label="Last name" />
        <FormInput required name="email" label="Email" />
        <FormInput required name="password" label="Password" />
        <FormInput required name="RePassword" label="Repeat Password" />
        <CountryInput required name="country" label="Country" />
        <FormInput required name="city" label="City" />
        <FormInput name="address1" label="Address line 1" />
        <FormInput name="address2" label="Address line 2" />
        <FormInput name="zip" label="Zip / Postal code" />

        <Button variant="contained" type="submit" endIcon={<SendIcon />}>
          Send
        </Button>
      </FormProvider>
    </form>
  );
};

export default RegisterForm;
