import { configureStore } from "@reduxjs/toolkit";
import { EmployeeManagementReducer } from "./reducers/employeeManagement";

/// Création du store Redux
export const store = configureStore({
  reducer: {
    employeeManagement: EmployeeManagementReducer,
  },
});
