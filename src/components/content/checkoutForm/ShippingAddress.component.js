import FormInput from "./FormInput";
import { Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import ShippingForm from "./ShippingForm";
const ShippingAddress = () => {
  const methods = useForm();
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={() => {}}>
          <Grid container spacing={2}>
            <FormInput name="firstName" label="First Name" />
            <FormInput name="lastName" label="Last Name" />
            <FormInput name="address" label="Address" />
            <FormInput name="email" label="Email" />
            <FormInput name="city" label="City" />
            <FormInput name="zip" label="ZIP" />

            <ShippingForm />
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};
export default ShippingAddress;
