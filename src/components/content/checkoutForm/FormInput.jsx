import { Grid, Input, TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

const FormInput = ({ name, label, required }) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        as={TextField}
        control={control}
        fullWidth
        name={name}
        label={label}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            id="outlined-basic"
            label={label}
            variant="outlined"
            {...field}
          />
        )}
      />
    </Grid>
  );
};

export default FormInput;
