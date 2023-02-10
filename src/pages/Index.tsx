import { Link } from "react-router-dom";
import { Input } from "../components/Input/Input";

import "./../pages.scss";

//// TODO

/// 1 LIB : Modale /ou Tableau
/// 1 COMPOSANT : Tableau

/// 2 LIBS EXTERNES : Sélecteur de date + Liste déroulante
/// https://www.radix-ui.com/ (dialog, select -> pas de date picker)
/// https://ant.design/ (tout est dispo)
/// https://mui.com/ (tout est dispo)

export function Index() {
  return (
    <div className="index-page">
      <h1>HRnet</h1>
      <Link to={"/currentEmployees"}>View Current Employees</Link>
      <h2>Create Employee</h2>
      <form action="">
        {_infosData.map((info) => {
          return <Input label={info}></Input>;
        })}
        <fieldset className="adress">
          <legend>Adress</legend>
          {_adressData.map((info) => {
            return <Input label={info}></Input>;
          })}
          <div>
            <label htmlFor="State">State</label>
            <select id="State" name="State" placeholder="State" />
          </div>
          <Input label="Zip-code" type="number"></Input>
        </fieldset>
        <div>
          <label htmlFor="Departement">Departement</label>
          <select id="Departement" name="Departement" />
        </div>
        <button>Save</button>
      </form>
    </div>
  );
}

const _infosData = ["First Name", "Last Name", "Date of Birth", "Start Date"];
const _adressData = ["Street", "City"];
