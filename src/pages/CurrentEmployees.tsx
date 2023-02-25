import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Link } from "react-router-dom";
import { Input } from "../components/Input/Input";
import { Table } from "../components/Table/table";

import "./../pages.scss";

export function CurrentEmployees() {
  return (
    <div className="employees-page">
      <header>
        <h1>Current Employees</h1>
        <Link to={"/"}>Home</Link>
      </header>

      <div className="pre-table">
        <FormControl>
          <InputLabel id="entries">Show entries</InputLabel>
          <Select
            labelId="entries"
            id="entries"
            label="entries"
            value={0}
            onChange={() => {}}
          >
            <MenuItem value={0}>10</MenuItem>
            <MenuItem value={1}>25</MenuItem>
            <MenuItem value={2}>50</MenuItem>
            <MenuItem value={3}>100</MenuItem>
          </Select>
        </FormControl>
        <Input label="Rechercher"></Input>
      </div>

      <Table></Table>

      <div className="bottom">
        <span>Showing 0 to 0 of 0 entries</span>
        <div className="navigation">
          <a href="#">Previous</a>
          <a href="#">Next</a>
        </div>
      </div>
    </div>
  );
}
