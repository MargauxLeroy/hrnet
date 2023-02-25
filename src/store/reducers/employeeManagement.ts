import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Departement } from "../../constants/departments";
import { employees } from "../../data/employees";
import { AdressState } from "../../constants/states";

export type Employee = {
  firstName: string;
  lastName: string;
  dateBirth: Date;
  startDate: Date;
  adress: Adress;
  department: Departement;
};

type Adress = {
  street: string;
  city: string;
  state: AdressState;
  zipCode: number;
};

type State = {
  employees: Employee[];
  newEmployee: Partial<Employee>;
};

const initialState: State = {
  employees: employees,
  newEmployee: {},
};

/// Création du reducer et des actions
const { actions: sliceActions, reducer: sliceReducer } = createSlice({
  name: "employee_management",
  initialState: initialState,
  reducers: {
    updateNewEmployee: (state, action: PayloadAction<Partial<Employee>>) => {
      state.newEmployee = action.payload;
      // state.newEmployee = {
      //   ...state.newEmployee, // Permet de conserver les valeurs précédemment enregistrées
      //   ...action.payload,
      // };
    },

    addEmployee: (state) => {
      if (state.newEmployee) {
        throw new Error(
          "Le formulaire de création d'un nouvel employé n'est pas complet"
        );
      }

      /// Vérifier que l'employé contient toutes les informations
      state.employees.push();
    },
  },
});

export const employeeManagementActions = {
  ...sliceActions,
};

export const EmployeeManagementReducer = sliceReducer;
