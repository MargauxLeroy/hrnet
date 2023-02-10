import React from "react";

import "./input.scss";

type InputProps = {
  label: string;
  type?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export function Input({ label, type, onChange }: InputProps) {
  return (
    <div className="input-wrapper">
      <label htmlFor={label}>{label}</label>
      <input id={label} type={type ?? "text"} onChange={onChange} />
    </div>
  );
}
