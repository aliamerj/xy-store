import { Grid, TextField } from "@mui/material";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

function FormInput({ name, label, required }) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  let isError = false;
  let errorMessage;
  const handleErrorInput = (message) => {
    if (errors) {
      isError = true;
      errorMessage = message;
    }
  };

  return (
    <>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => handleErrorInput(message)}
      />
      <Grid item xs={12} sm={6}>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <TextField
              required={required}
              error={isError}
              helperText={errorMessage}
              id="outlined-error"
              label={label}
              variant="outlined"
              size="small"
              {...field}
              type={
                name === "password" || name === "RePassword"
                  ? "password"
                  : "text"
              }
              fullWidth
            />
          )}
        />
      </Grid>
    </>
  );
}

export default FormInput;
