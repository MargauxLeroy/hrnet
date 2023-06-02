import React from "react";

import "./inputDate.scss";

type InputDateProps = {
  label: string;
  id: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export function InputDate({ label, id, onChange }: InputDateProps) {
  return (
    <div className="date-input">
      <label htmlFor="birthDate">{label}</label>
      <input id={id} type="date" onChange={onChange} />
    </div>
  );
}
