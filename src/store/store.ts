import { configureStore } from "@reduxjs/toolkit";
import { EmployeeManagementReducer } from "./reducers/employeeManagement";

/// Création du store Redux
export const store = configureStore({
  reducer: {
    employeeManagement: EmployeeManagementReducer,
  },
});

export type AppStore = typeof store;
export type AppState = ReturnType<typeof store.getState>;