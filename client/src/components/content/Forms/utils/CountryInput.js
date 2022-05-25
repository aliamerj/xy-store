import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import { countriesSupporting } from "../../../../FakeData/countriesSupporting";
import { Grid, TextField } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { FieldStyle } from "../../../../styles/content.style/form.style/formInput.style";
export default function CountryInput({ name, label, required }) {
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
          required={required}
          error={isError}
          helperText={errorMessage}
          id="outlined-error"
          variant="outlined"
          size="small"
          render={({ field }) => (
            <Autocomplete
              id="country-select-demo"
              fullWidth
              options={countriesSupporting}
              autoHighlight
              getOptionLabel={(option) => option.label}
              {...field}
              renderOption={(props, option) => (
                <Box
                  component="li"
                  sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  {...props}
                >
                  <img
                    loading="lazy"
                    width="20"
                    src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                    srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                    alt=""
                  />
                  {option.label} ({option.code}) +{option.phone}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Choose a country"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password",
                  }}
                />
              )}
            />
          )}
        />
      </FieldStyle>
    </>
  );
}
