import { Column } from "./components/Table/table";
import { SortConfig } from "./pages/CurrentEmployees";
import { Employee } from "./store/reducers/employeeManagement";

export function formatDate(date: Date) {
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
}

export function filterEmployees(searchString: string, employees: Employee[]) {
  const filteredEmployees = employees.filter((employee) => {
    return (
      employee.firstName.toLowerCase().includes(searchString) ||
      employee.lastName.toLowerCase().includes(searchString) ||
      employee.adress.street.toLowerCase().includes(searchString) ||
      employee.adress.city.toLowerCase().includes(searchString)
    );
  });

  return filteredEmployees;
}

export function sortEmployees(employees: Employee[], sortConfig: SortConfig) {
  const column = sortConfig.selectedColumn;

  if (column === undefined || sortConfig.sortMode === undefined) {
    return employees;
  }

  const isAsc = sortConfig.sortMode === "asc";

  if (
    column === "firstName" ||
    column === "lastName" ||
    column === "department"
  ) {
    return [...employees].sort((a, b) => {
      if (a[column] < b[column]) return isAsc ? -1 : 1;
      if (a[column] > b[column]) return isAsc ? 1 : -1;
      return 0;
    });
  }

  if (column === "street" || column === "city") {
    return [...employees].sort((a, b) => {
      if (a.adress[column] < b.adress[column]) return isAsc ? -1 : 1;
      if (a.adress[column] > b.adress[column]) return isAsc ? 1 : -1;
      return 0;
    });
  }

  /// TODO
  if (column === "zipCode") {
    return [...employees].sort((a, b) => {
      if (a.adress[column] - b.adress[column]) return isAsc ? -1 : 1;
      if (a.adress[column] - b.adress[column]) return isAsc ? 1 : -1;
      return 0;
    });
  }

  if (column === "state") {
    return [...employees].sort((a, b) => {
      if (a.adress[column].name < b.adress[column].name) return isAsc ? -1 : 1;
      if (a.adress[column].name > b.adress[column].name) return isAsc ? 1 : -1;
      return 0;
    });
  }

  if (column === "dateBirth" || column === "startDate") {
    return [...employees].sort((a, b) => {
      if (isAsc) {
        return b[column].getTime() - a[column].getTime();
      } else {
        return a[column].getTime() - b[column].getTime();
      }
    });
  }

  return employees;
}
