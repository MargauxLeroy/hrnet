import TextField from "@mui/material/TextField";
import React from "react";

import "./input.scss";

type InputProps = {
  label: string;
  type?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export function Input({ label, type, onChange }: InputProps) {
  return (
    <TextField
      className="input"
      type={type ?? "text"}
      // helperText=""
      // placeholder=""
      label={label}
      id="outlined-basic"
      variant="outlined"
      onChange={onChange}
    />
  );
}
