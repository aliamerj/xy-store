import React from "react";
import { Step, StepLabel, Stepper } from "@mui/material";

const StepperComponent = ({ activeStep }) => {
  const steps = ["Shipping address", "Payment details"];
  return (
    <>
      <Stepper activeStep={activeStep}>
        {steps.map((step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </>
  );
};

export default StepperComponent;
