import { Employee } from "./store/reducers/employeeManagement";

export function formatDate(date: Date) {
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  return `${month}/${day}/${year}`;
}

export function sortEmployeesAlphabetically(employees: Employee[]): Employee[] {
  return employees.sort(function (a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
}

export function sortAlphabetically(list: string[]): string[] {
  return list.sort(function (a, b) {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
}
