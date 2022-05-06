import { Grid, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { commerce } from "../../../lib/Commerce";

const ShippingForm = () => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");
  const methods = useForm();
  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );
    setShippingCountries(countries);
  };
  return (
    <>
      <Grid item xs={12} sm={6}>
        <InputLabel>Shipping Country</InputLabel>
        <Select value="" fullWidth onChange="">
          <MenuItem key="" value="">
            Select me
          </MenuItem>
        </Select>
      </Grid>
      <Grid item xs={12} sm={6}>
        <InputLabel>Shipping subdivision</InputLabel>
        <Select value="" fullWidth onChange="">
          <MenuItem key="" value="">
            Select me
          </MenuItem>
        </Select>
      </Grid>
      <Grid item xs={12} sm={6}>
        <InputLabel>Shipping Options</InputLabel>
        <Select value="" fullWidth onChange="">
          <MenuItem key="" value="">
            Select me
          </MenuItem>
        </Select>
      </Grid>
    </>
  );
};

export default ShippingForm;
