"use client";
import { TextField } from "@mui/material";

export default function CustomTextField({ label, value, onChange, type = "text", ...props }) {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
      type={type}
      variant="outlined"
      fullWidth
      {...props}
    />
  );
}
