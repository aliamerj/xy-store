import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "../utils/FormInput";
import SendIcon from "@mui/icons-material/Send";
import registerSchema from "../RegisterForm/RegisterValidation";
import Button from "@mui/material/Button";

const SignInForm = () => {
  const methods = useForm({
    resolver: yupResolver(registerSchema),
  });
  const { handleSubmit } = methods;
  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <FormProvider {...methods}>
        <FormInput required name="email" label="Email" />
        <FormInput required name="password" label="Password" />
        <Button variant="contained" type="submit" endIcon={<SendIcon />}>
          Send
        </Button>
      </FormProvider>
    </form>
  );
};

export default SignInForm;
