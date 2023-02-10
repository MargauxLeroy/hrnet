import { Link } from "react-router-dom";
import "./../pages.scss";

export function CurrentEmployees() {
  return (
    <div className="employees-page">
      <h1>Current Employees</h1>
      <div className="header">
        <div className="displaying">
          <p>Show </p>
          <select name="entries" id="entries"></select>
          <p>entries</p>
        </div>
        <div className="search-input">
          <label htmlFor="search">Search:</label>
          <input id="search" type="text" />
        </div>
      </div>
      <table className="table" id="employee-table" role="grid">
        <thead>
          <tr role="row">
            {_thData.map((th) => {
              return (
                <th tabIndex={0} rowSpan={1} colSpan={1}>
                  {th}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className="body">
          <tr>
            <td className="noData">No data available in table</td>
          </tr>
        </tbody>
      </table>
      <div className="bottom">
        <span>Showing 0 to 0 of 0 entries</span>
        <div className="navigation">
          <a href="">Previous</a>
          <a href="">Next</a>
        </div>
      </div>
      <Link to={"/"}>Home</Link>
    </div>
  );
}

const _thData = [
  "First Name",
  "Last Name",
  "Date of Birth",
  "Start Date",
  "Street",
  "City",
  "State",
  "Zip Code",
];
