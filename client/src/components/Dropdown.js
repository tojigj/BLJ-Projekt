import React, { useState, useEffect } from "react";
import Section from "./section";

const DropdownComponent = ({ selected, setSelected }) => {
  const [isActive, setisActive] = useState(false);
  const showDropdown = isActive
    ? "dropdown-content showDropdown"
    : "dropdown-content hideDropdown";

  return (
    <div className="dropdown-main">
      <button
        className="selectDropdown"
        onClick={(e) => setisActive(!isActive)}
      >
        Filter Sitzungszimmer
      </button>
      <span className="fas fa-caret-down"></span>
      <div className={showDropdown}>hallo</div>
    </div>
  );
};

export default DropdownComponent;
