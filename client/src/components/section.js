import React from "react";
import Stockwerke from "./requirements/stockwerke";
import Standorte from "./requirements/standorte";
import Anz_Pers from "./requirements/anz-personen";
import Date from "./requirements/datum";
import Search_Button from "./search";

const requirements = () => {
  return (
    <div className="requirements">
      <Standorte />
      <Stockwerke />
      <Anz_Pers />
      <Date />
      <Search_Button />
    </div>
  );
}

export default requirements;
