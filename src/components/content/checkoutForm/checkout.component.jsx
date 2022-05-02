import { Paper, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { useState } from "react";
import AddressForm from "./AddressForm";
import PaymentForm from "./PaymentForm";

const steps = ["Shipping address", "Payment details"];

const CheckoutComponent = () => {
  const [activeStep, setActiveStep] = useState(0);
  const Form = () => (activeStep === 0 ? <AddressForm /> : <PaymentForm />);
  const Confirmation = () => <div>Confirmation</div>;
  return (
    <>
      <main>
        <Paper>
          <Typography variant="h4" align="center">
            checkout
          </Typography>
          <Stepper activeStep={activeStep}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation /> : <Form />}
        </Paper>
      </main>
    </>
  );
};

export default CheckoutComponent;
