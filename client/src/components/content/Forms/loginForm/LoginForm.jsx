import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "../utils/FormInput";
import SendIcon from "@mui/icons-material/Send";
import loginSchema from "./loginValidation";
import loginHandler from "../../../../utils/auth/login.auth";
import { useDispatch, useSelector } from "react-redux";

const LoginForm = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector((state) => state.entities.auth.isFetching);
  const methods = useForm({
    resolver: yupResolver(loginSchema),
  });
  const { handleSubmit } = methods;
  return (
    <form onSubmit={handleSubmit((data) => loginHandler(data, dispatch))}>
      <FormProvider {...methods}>
        <FormInput required name="email" label="Email" />
        <FormInput required name="password" label="Password" />
        <LoadingButton
          variant="contained"
          type="submit"
          endIcon={<SendIcon />}
          loading={isFetching}
        >
          Send
        </LoadingButton>
      </FormProvider>
    </form>
  );
};

export default LoginForm;
