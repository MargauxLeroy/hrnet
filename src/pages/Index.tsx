import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../components/Input/Input";
import { Modale } from "../components/Modale/modale";
import { departments } from "../constants/departments";
import { states } from "../constants/states";

import "./../pages.scss";

export function Index() {
  const [modaleDisplay, setModaleDisplay] = useState<boolean>(false);

  return (
    <div className="index-page">
      <Modale
        title="Confirmation"
        description="Your employee has been created !"
        displayed={modaleDisplay}
        onClick={(e) => {
          e.preventDefault();
          setModaleDisplay(false);
        }}
      ></Modale>
      <header>
        <h1>HRnet</h1>
        <Link to={"/currentEmployees"}>View Current Employees</Link>
        <h2>Create Employee</h2>
      </header>
      <form action="">
        <div className="form-line">
          <Input label="First Name"></Input>
          <Input label="Last Name"></Input>
        </div>
        <div className="form-line">
          <div className="date-input">
            <label htmlFor="birthDate">Date of Birth</label>
            <input id="birthDate" type="date" />
          </div>
          <div className="date-input">
            <label htmlFor="startDate">Start Date</label>
            <input id="startDate" type="date" />
          </div>
          {/* <Input label="Date of Birth" type="date"></Input>
          <Input label="Start Date" type="date"></Input> */}
        </div>
        <fieldset className="adress">
          <legend>Adress</legend>
          <Input label="Street"></Input>
          <div className="form-line">
            <Input label="City"></Input>
            <Input label="Zip-code" type="number"></Input>
          </div>
          <div>
            <FormControl fullWidth>
              <InputLabel id="state">State</InputLabel>
              <Select
                labelId="state"
                id="state"
                label="State"
                value={0}
                onChange={() => {}}
              >
                <MenuItem value={0}>--</MenuItem>
                {states.map((e, index) => (
                  <MenuItem key={index} value={index + 1}>
                    {e.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </fieldset>
        <div>
          <FormControl fullWidth>
            <InputLabel id="departement">Département</InputLabel>
            <Select
              labelId="departement"
              id="departement"
              label="Département"
              value={0}
              onChange={() => {}}
            >
              <MenuItem value={0}>--</MenuItem>
              {departments.map((e, index) => (
                <MenuItem key={index} value={index + 1}>
                  {e}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setModaleDisplay(true);
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
}
