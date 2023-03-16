import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useCallback, useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "../components/Input/Input";
import { Column, Table } from "../components/Table/table";
import { employees } from "../data/employees";
import { filterEmployees, sortEmployees } from "../utils";

import "./../pages.scss";

type Step = 10 | 25 | 50 | 100;

export type Pagination = {
  step: Step;
  cursor: number;
};

export type SortConfig = {
  selectedColumn: Column | undefined;
  sortMode: "asc" | "desc" | undefined;
};

export function CurrentEmployees() {
  const [searchString, setSearchString] = useState("");

  const [pagination, setPagination] = useReducer(
    (state: Pagination, partialPagination: Partial<Pagination>): Pagination => {
      if (
        partialPagination.cursor !== undefined &&
        partialPagination.cursor < 0
      ) {
        return state;
      }
      return { ...state, ...partialPagination };
    },
    { cursor: 0, step: 10 }
  );

  const [sortConfig, selectColumn] = useReducer(
    (state: SortConfig, selectedColumn: Column | undefined): SortConfig => {
      if (selectedColumn === state.selectedColumn) {
        if (state.sortMode === undefined) {
          return {
            ...state,
            sortMode: "asc",
          };
        }
        if (state.sortMode === "asc") {
          return {
            ...state,
            sortMode: "desc",
          };
        }
        if (state.sortMode === "desc") {
          return {
            ...state,
            sortMode: undefined,
          };
        }
      } else {
        return {
          ...state,
          selectedColumn: selectedColumn,
          sortMode: "asc",
        };
      }
      return state;
    },
    {
      selectedColumn: undefined,
      sortMode: undefined,
    }
  );

  console.log("sortMode", sortConfig.sortMode);
  console.log("selectedColumn", sortConfig.selectedColumn);

  const handleEntriesChange = (event: SelectChangeEvent) => {
    setPagination({ step: Number(event.target.value) as Step });
  };

  const start = pagination.cursor * pagination.step;
  const end = (pagination.cursor + 1) * pagination.step;

  const filteredEmployees = filterEmployees(searchString, employees);
  const sortedEmployees = sortEmployees(filteredEmployees, sortConfig);

  useEffect(() => {
    const maxNumberOfPages = Math.floor(
      filteredEmployees.length / pagination.step
    );
    if (pagination.cursor > maxNumberOfPages - 1) {
      setPagination({
        cursor: Math.floor(filteredEmployees.length / pagination.step) - 2,
      });
    }
  }, [filteredEmployees.length, pagination.step, setPagination]);

  return (
    <div className="employees-page">
      <header>
        <h1>Current Employees</h1>
        <Link to={"/"}>Home</Link>
      </header>

      <div className="pre-table">
        <FormControl>
          <InputLabel id="showEntries">Show entries</InputLabel>
          <Select
            labelId="showEntries"
            id="showEntries"
            label="showEntries"
            value={pagination.step.toString()}
            onChange={handleEntriesChange}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
        </FormControl>
        <Input
          label="Rechercher"
          onChange={(e) => {
            const inputValue = e.target.value.toLowerCase();
            setSearchString(inputValue);
          }}
        ></Input>
      </div>

      <Table
        pagination={pagination}
        employees={sortedEmployees}
        onColumnSelected={selectColumn}
      ></Table>

      <div className="bottom">
        <span>
          Showing {start} to {Math.min(end, filteredEmployees.length)} of{" "}
          {employees.length} entries
        </span>
        <div className="navigation">
          <button
            disabled={pagination.cursor === 0}
            onClick={(e) => {
              e.preventDefault();
              setPagination({ cursor: pagination.cursor - 1 });
            }}
          >
            Previous
          </button>
          <button
            disabled={end >= filteredEmployees.length}
            onClick={(e) => {
              e.preventDefault();
              setPagination({ cursor: pagination.cursor + 1 });
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
