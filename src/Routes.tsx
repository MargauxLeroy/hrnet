import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { CurrentEmployees } from "./pages/CurrentEmployees";
import { Index } from "./pages/Index";

export const router = createBrowserRouter(
  createRoutesFromElements(getRoutes())
);

export function getRoutes() {
  return (
    <>
      <Route path="/" index element={<Index />} />
      <Route path="/currentEmployees" index element={<CurrentEmployees />} />
    </>
  );
}
