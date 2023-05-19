import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { employees } from "../../data/employees";
import { checkFormValidity, isEmployee, RecursivePartial } from "../../utils";
import { states } from "../../constants/states";
import { departments } from "../../constants/departments";

type State = {
  employees: Employee[];
  newEmployee: RecursivePartial<Employee>;
  formErrors: FormError[] | null;
};

export type FormError = {
  fieldId: string;
  message: string;
};

const initialState: State = {
  employees: employees,
  newEmployee: {},
  formErrors: null,
};

/// Création du reducer et des actions
const { actions: sliceActions, reducer: sliceReducer } = createSlice({
  name: "employee_management",
  initialState: initialState,
  reducers: {
    updateNewEmployee: (
      state,
      action: PayloadAction<RecursivePartial<Employee>>
    ) => {
      state.newEmployee = {
        ...state.newEmployee, // Permet de conserver les valeurs précédemment enregistrées
        ...action.payload,
      };
    },
    addEmployee: (state) => {
      const newEmployee = state.newEmployee;

      /// Vérifier que l'employé contient toutes les informations et que celles-ci sont valides
      // if (isEmployee(newEmployee) && checkFormValidity(newEmployee).length === 0) {
      if (isEmployee(newEmployee)) {
        state.employees.push(newEmployee);

        /// On vide l'employé temporaire qui vient d'être ajouté
        state.newEmployee = {};
      } else {
        /// On récupère les msgs d'erreurs créés
        state.formErrors = checkFormValidity(newEmployee);

        throw new Error(
          "Le formulaire de création d'un nouvel employé n'est pas complet"
        );
      }
    },
  },
});

export const employeeManagementActions = {
  ...sliceActions,
};

export const EmployeeManagementReducer = sliceReducer;

/// Types
export type Employee = {
  firstName: string;
  lastName: string;
  dateBirth: string;
  startDate: string;
  adress: Adress;
  department: Departement;
};

export type Adress = {
  street: string;
  city: string;
  state: AdressState["abbreviation"];
  zipCode: number;
};

export type Departement = (typeof departments)[number];

export type AdressState = (typeof states)[number];
