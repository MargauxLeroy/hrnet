import React, { useState } from "react";
import { employees } from "../../data/employees";
import { formatDate } from "../../utils";

import "./table.scss";

export function Table() {
  const [data, setData] = useState(employees);

  return (
    <table className="table" id="employee-table" role="grid">
      <thead>
        <tr role="row">
          <th
            colSpan={1}
            rowSpan={1}
            onClick={() => {
              setData(
                [...data].sort((a, b) => {
                  if (a.firstName < b.firstName) return -1;
                  if (a.firstName > b.firstName) return 1;

                  return 0;
                })
              );
            }}
          >
            First Name
          </th>
          <th
            colSpan={1}
            rowSpan={1}
            onClick={() => {
              setData(
                [...data].sort((a, b) => {
                  if (a.lastName < b.lastName) return -1;
                  if (a.lastName > b.lastName) return 1;

                  return 0;
                })
              );
            }}
          >
            Last Name
          </th>
          <th
            colSpan={1}
            rowSpan={1}
            onClick={() => {
              [...data].sort((a, b) => {
                return a.dateBirth < b.dateBirth
                  ? -1
                  : a.dateBirth > b.dateBirth
                  ? 1
                  : 0;
              });
            }}
          >
            Date of Birth
          </th>
          <th colSpan={1} rowSpan={1} onClick={() => {}}>
            Start Date
          </th>
          <th colSpan={1} rowSpan={1} onClick={() => {}}>
            Street
          </th>
          <th colSpan={1} rowSpan={1} onClick={() => {}}>
            City
          </th>
          <th colSpan={1} rowSpan={1} onClick={() => {}}>
            Zip Code
          </th>
          <th colSpan={1} rowSpan={1}>
            State
          </th>
        </tr>
      </thead>

      {/* <tbody className="noData">
        <td className="noData">No data available in table</td>
      </tbody> */}

      <tbody>
        {data.map((e, index) => {
          return (
            <tr key={index}>
              <td>{e.firstName}</td>
              <td>{e.lastName}</td>
              <td>{formatDate(e.dateBirth)}</td>
              <td>{formatDate(e.startDate)}</td>
              <td>{e.adress.street}</td>
              <td>{e.adress.city}</td>
              <td>{e.adress.zipCode}</td>
              <td>{e.adress.state.abbreviation}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
