import { SortConfig } from "./pages/CurrentEmployees";
import { Employee, FormError } from "./store/reducers/employeeManagement";

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
      if (a.adress[column] < b.adress[column]) return isAsc ? -1 : 1;
      if (a.adress[column] > b.adress[column]) return isAsc ? 1 : -1;
      return 0;
    });
  }

  if (column === "dateBirth" || column === "startDate") {
    return [...employees].sort((a, b) => {
      if (isAsc) {
        return new Date(b[column]).getTime() - new Date(a[column]).getTime();
      } else {
        return new Date(a[column]).getTime() - new Date(b[column]).getTime();
      }
    });
  }

  return employees;
}

export function isEmployee(
  maybeEmployee: RecursivePartial<Employee>
): maybeEmployee is Employee {
  if (maybeEmployee.firstName === undefined) {
    return false;
  }

  if (maybeEmployee.lastName === undefined) {
    return false;
  }

  if (maybeEmployee.dateBirth === null) {
    return false;
  }

  if (maybeEmployee.startDate === null) {
    return false;
  }

  if (
    maybeEmployee.adress?.street === undefined ||
    maybeEmployee.adress?.city === undefined ||
    maybeEmployee.adress?.state === undefined ||
    maybeEmployee.adress?.zipCode === undefined
  ) {
    return false;
  }

  if (maybeEmployee.department === undefined) {
    return false;
  }

  return true;
}

export function checkFormValidity(
  maybeEmployee: RecursivePartial<Employee>
): FormError[] {
  const errors: FormError[] = [];

  // TODO: disable bouton du form tant que les champs ne sont pas tous complets
  /// Tant que l'employé n'est pas "complet", on ne vérifie pas les champs
  if (!isEmployee(maybeEmployee)) {
    errors.push({
      fieldId: "all",
      message: "The form is not complete",
    });

    return errors;
  }

  if (maybeEmployee.firstName?.length < 2) {
    errors.push({
      fieldId: "firstName",
      message: "Your firstname should be at least 2 characters",
    });
  }

  if (maybeEmployee.lastName?.length < 2) {
    errors.push({
      fieldId: "lastName",
      message: "Your lastname should be at least 2 characters",
    });
  }

  /// Vérifier que c'est une date et que c'est pas avant 1800 ou après 2005 (ou current - 18ans)
  if (false) {
    errors.push({
      fieldId: "dateBirth",
      message: "Your date of birth should be complete",
    });
  }

  /// Vérifier que c'est une date et que c'est pas avant la date de naissance
  if (false) {
    errors.push({
      fieldId: "startDate",
      message: "Your start date should be after your date of birth",
    });
  }

  if (maybeEmployee.adress.zipCode.toString().length !== 5) {
    errors.push({
      fieldId: "startDate",
      message: "Your zip code should have exactly 5 digits",
    });
  }

  return errors;
}

export type RecursivePartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? RecursivePartial<U>[]
    : T[P] extends object
    ? RecursivePartial<T[P]>
    : T[P];
};
