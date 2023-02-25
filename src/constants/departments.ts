export type Departement = typeof departments[number];

export const departments = [
  "Sales",
  "Marketing",
  "Engineering",
  "Human Resources",
  "Legal",
] as const;
