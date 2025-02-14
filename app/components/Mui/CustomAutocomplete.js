"use client";
import { Autocomplete, TextField } from "@mui/material";

export default function CustomAutocomplete({ label, value, onChange, options,   ...props }) {
  return (
    <>
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.title}
      // error={true}
      value={options.find((option) => option.value === value) || null}
      onChange={(event, newValue) => onChange(newValue ? newValue.value : "")}
      renderInput={(params) => (
        <TextField
        {...params}
          label={label}
          variant="outlined"
          {...props}
          />
        )}
        fullWidth
        {...props}
        />
        {/* <h1 className="text-red-400 text-lg font-semibold">{helperText}</h1> */}
    </>
  );
}
