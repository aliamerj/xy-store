import { Typography, Grid, Box } from "@mui/material";
import { useEffect, useState } from "react";
import AddressForm from "./ShippingForm";
import PaymentForm from "./PaymentForm";
import ShippingAddress from "./ShippingAddress.component";
import StepperComponent from "./Stepper.component";
import { commerce } from "../../../lib/Commerce";

const CheckoutComponent = () => {
  const [activeStep, setActiveStep] = useState(0);

  const Form = () => (activeStep === 0 ? <AddressForm /> : <PaymentForm />);
  const Confirmation = () => <div>Confirmation</div>;
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          marginY={4}
          border={3}
        >
          <Grid item xs={8}>
            <Typography variant="h4" align="center" gutterBottom>
              checkout
            </Typography>
            <StepperComponent activeStep={activeStep} />
          </Grid>
          <Grid item xs={8} justifyItems="center">
            <ShippingAddress />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CheckoutComponent;
