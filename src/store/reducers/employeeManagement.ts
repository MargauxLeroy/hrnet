import { createSlice } from "@reduxjs/toolkit";

/// Création du reducer et des actions
const { actions: sliceActions, reducer: sliceReducer } = createSlice({
  name: "employee_management",
  initialState: {
    employees: [],
    newEmployee: {},
  },
  reducers: {},
});

export const employeeManagementActions = {
  ...sliceActions,
};

export const EmployeeManagementReducer = sliceReducer;
