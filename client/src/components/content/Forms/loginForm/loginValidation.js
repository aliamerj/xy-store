import * as yup from "yup";
const loginSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .min(5, "Password so week")
      .max(255, "password so long")
      .required(),
  })
  .required();

export default loginSchema;
