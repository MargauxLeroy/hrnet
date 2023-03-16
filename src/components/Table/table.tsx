import React from "react";
import { Pagination } from "../../pages/CurrentEmployees";
import { Employee } from "../../store/reducers/employeeManagement";
import { formatDate } from "../../utils";

import "./table.scss";

type TableProps = {
  employees: Employee[];
  pagination: Pagination;
  onColumnSelected: (column: Column) => void;
};

export const COLUMNS = {
  firstName: "firstName",
  lastName: "lastName",
  dateBirth: "dateBirth",
  startDate: "startDate",
  street: "street",
  city: "city",
  zipCode: "zipCode",
  state: "state",
  department: "department",
};

export type Column = keyof typeof COLUMNS;

export function Table({ employees, pagination, onColumnSelected }: TableProps) {
  const start = pagination.cursor * pagination.step;
  const end = (pagination.cursor + 1) * pagination.step;

  return (
    <table className="table" id="employee-table" role="grid">
      <thead>
        <tr role="row">
          <th
            colSpan={2}
            rowSpan={1}
            onClick={() => onColumnSelected("firstName")}
          >
            First Name
          </th>
          <th
            colSpan={2}
            rowSpan={1}
            onClick={() => onColumnSelected("lastName")}
          >
            Last Name
          </th>
          <th
            colSpan={2}
            rowSpan={1}
            onClick={() => onColumnSelected("dateBirth")}
          >
            Date of Birth
          </th>
          <th
            colSpan={2}
            rowSpan={1}
            onClick={() => onColumnSelected("startDate")}
          >
            Start Date
          </th>
          <th
            colSpan={2}
            rowSpan={1}
            onClick={() => onColumnSelected("department")}
          >
            Department
          </th>
          <th
            colSpan={2}
            rowSpan={1}
            onClick={() => onColumnSelected("street")}
          >
            Street
          </th>
          <th colSpan={2} rowSpan={1} onClick={() => onColumnSelected("city")}>
            City
          </th>
          <th
            colSpan={1}
            rowSpan={1}
            onClick={() => onColumnSelected("zipCode")}
          >
            Zip Code
          </th>
          <th colSpan={1} rowSpan={1} onClick={() => onColumnSelected("state")}>
            State
          </th>
        </tr>
      </thead>

      {employees.length === 0 ? (
        <tbody className="noData">
          <tr>
            <td colSpan={9}>No data available in table</td>
          </tr>
        </tbody>
      ) : (
        <tbody>
          {employees.slice(start, end).map((e, index) => {
            return (
              <tr key={index}>
                <td colSpan={2}>{e.firstName}</td>
                <td colSpan={2}>{e.lastName}</td>
                <td colSpan={2}>{formatDate(e.dateBirth)}</td>
                <td colSpan={2}>{formatDate(e.startDate)}</td>
                <td colSpan={2}>{e.department}</td>
                <td colSpan={2}>{e.adress.street}</td>
                <td colSpan={2}>{e.adress.city}</td>
                <td colSpan={1}>{e.adress.zipCode}</td>
                <td colSpan={1}>{e.adress.state.abbreviation}</td>
              </tr>
            );
          })}
        </tbody>
      )}
    </table>
  );
}
