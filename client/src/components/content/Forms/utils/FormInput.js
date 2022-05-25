import { TextField } from "@mui/material";
import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { FieldStyle } from "../../../../styles/content.style/form.style/formInput.style";

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
      <FieldStyle>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <TextField
              fullWidth
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
            />
          )}
        />
      </FieldStyle>
    </>
  );
}

export default FormInput;
