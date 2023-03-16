import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Input } from "../components/Input/Input";
import { Modale } from "../components/Modale/modale";
import { Departement, departments } from "../constants/departments";
import { AdressState, states } from "../constants/states";
import {
  Employee,
  employeeManagementActions,
} from "../store/reducers/employeeManagement";
import { checkFormValidity, RecursivePartial } from "../utils";

import "./../pages.scss";

export function Index() {
  const dispatch = useDispatch();

  // const newEmployee = useSelector<AppState, RecursivePartial<Employee>>(
  //   (state) => state.employeeManagement.newEmployee
  // );

  const [modaleDisplay, setModaleDisplay] = useState<boolean>(false);

  /// Initialisation des variables et de leurs states
  const [firstName, setFirstName] = useState<string | undefined>();
  const [lastName, setLastName] = useState<string | undefined>();
  const [birthDate, setBirthDate] = useState<string | undefined>();
  const [startDate, setStartDate] = useState<string | undefined>();

  /// useReducer pour faire l'adresse
  // const [adress, setAdress] = useState<Address | undefined>();
  const [street, setStreet] = useState<string | undefined>();
  const [city, setCity] = useState<string | undefined>();
  const [zipCode, setZipCode] = useState<number | undefined>();
  const [adressState, setAddressState] = useState<
    AdressState["abbreviation"] | undefined
  >();

  const [department, setDepartment] = useState<Departement | undefined>();

  // console.log('newEmployee', newEmployee);

  return (
    <div className="index-page">
      <Modale
        title="Confirmation"
        description="Your employee has been created !"
        displayed={modaleDisplay}
        onClick={(e) => {
          e.preventDefault();
          setModaleDisplay(false);
        }}
      ></Modale>
      <header>
        <h1>HRnet</h1>
        <Link to={"/currentEmployees"}>View Current Employees</Link>
        <h2>Create Employee</h2>
      </header>
      <form action="">
        <div className="form-line">
          <Input
            label="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          ></Input>
          <Input
            label="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          ></Input>
        </div>
        <div className="form-line">
          <div className="date-input">
            <label htmlFor="birthDate">Date of Birth</label>
            <input
              id="birthDate"
              type="date"
              onChange={(e) =>
                setBirthDate(
                  e.target.value == null ? undefined : e.target.value
                )
              }
            />
          </div>
          <div className="date-input">
            <label htmlFor="startDate">Start Date</label>
            <input
              id="startDate"
              type="date"
              onChange={(e) =>
                setStartDate(
                  e.target.value == null ? undefined : e.target.value
                )
              }
            />
          </div>
        </div>
        <fieldset className="adress">
          <legend>Adress</legend>
          <Input
            label="Street"
            onChange={(e) => setStreet(e.target.value)}
          ></Input>
          <div className="form-line">
            <Input
              label="City"
              onChange={(e) => setCity(e.target.value)}
            ></Input>
            <Input
              label="Zip-code"
              type="number"
              onChange={(e) => setZipCode(e.target.valueAsNumber)}
            ></Input>
          </div>
          <div>
            <FormControl fullWidth>
              <InputLabel id="state">State</InputLabel>
              <Select
                labelId="state"
                id="state"
                label="State"
                value={adressState}
                onChange={(e) => {
                  setAddressState(
                    e.target.value as AdressState["abbreviation"]
                  );
                }}
              >
                <MenuItem value={undefined}>--</MenuItem>
                {states.map((e, index) => (
                  <MenuItem key={index} value={e.abbreviation}>
                    {e.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </fieldset>
        <div>
          <FormControl fullWidth>
            <InputLabel id="departement">Département</InputLabel>
            <Select
              label="Département"
              labelId="departement"
              id="departement"
              value={department}
              onChange={(e) => {
                setDepartment(e.target.value as Departement);
              }}
            >
              <MenuItem value={undefined}>--</MenuItem>
              {departments.map((e, index) => (
                <MenuItem key={index} value={e}>
                  {e}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();

            const formNewEmployee: RecursivePartial<Employee> = {
              firstName: firstName,
              lastName: lastName,
              dateBirth: birthDate,
              startDate: startDate,
              adress: {
                street: street,
                city: city,
                zipCode: zipCode,
                state: adressState,
              },
              department: department,
            };

            console.log("formNewEmployee", formNewEmployee);

            /// On met à jour le nouvel employé
            dispatch(
              employeeManagementActions.updateNewEmployee(formNewEmployee)
            );

            /// On récupère les potentiels msg d'erreurs
            const errorMessages = checkFormValidity(formNewEmployee);

            /// Si c'est vide, c'est que les champs ont passé leur étape de validation
            /// On valide la création et l'ajout dans la liste des employés
            if (errorMessages.length === 0) {
              // dispatch(employeeManagementActions.addEmployee);
              setModaleDisplay(true);

              /// TODO: clear form
            }
            /// Sinon, on récupère les msg pour les afficher côté vue
            else {
              console.log("errorMessages", errorMessages);
            }
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
}
