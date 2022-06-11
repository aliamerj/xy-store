import * as yup from "yup";
const registerSchema = yup
  .object({
    firstName: yup
      .string()
      .matches(/^([^0-9]*)$/, "First name should not contain a number")
      .min(2, "First name is so short")
      .max(10, "First name is so long")
      .required("First name  is a required field"),
    lastName: yup
      .string()
      .matches(/^([^0-9]*)$/, "Last name should not contain a number")
      .min(3, "Last name is so short")
      .max(10, "Last name is so long")
      .required("Last name  is a required field"),
    email: yup.string().email().required(),
    password: yup
      .string()
      .min(5, "Password so week")
      .max(255, "password so long")
      .required(),
    RePassword: yup
      .string()
      .required("Please repeat your password")
      .oneOf([yup.ref("password")], "Your passwords do not match."),
    country: yup.string().required(),
    city: yup.string().required(),
    address1: yup.string().min(5).max(50),
    address2: yup.string().min(5).max(50),
    zip: yup.number().typeError("zip must be a number"),
  })
  .required();

export default registerSchema;
