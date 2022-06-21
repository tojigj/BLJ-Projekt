import React, { useState } from "react";
import {Link} from "react-router-dom"
import { navItems } from "./navItems";
import DropdownNav from "./dropdownNav";
import "./CSS/navbar.css"

import GebuchteSZ from "./gebuchteSitzungszimmer";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          SITZUNGSZIMMER - FINDER
        </Link>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "☰") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <DropdownNav />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;




/* --------------------------------------------------------------
import React from "react";
import {
  Outlet,
  Link,
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import GebuchteSZ from "./gebuchteSitzungszimmer";

const Header = () => {
  return (
    <>
      <nav className = "Header">
        <NavLink to="/" className="Header-Title">
          <h1>Sitzungszimmer - Finder</h1>
        </NavLink>
        <NavLink
        to={"/gebuchte-sitzungszimmer"}
        state={{ zimmerName: "" }}
        className="gebuchteSZLink"
        >
        <h5>Meine Buchungen</h5>
      </NavLink>
      <NavLink to="/" className="suva-title">
        <h5>SUVA</h5>
      </NavLink>
      </nav>
    </>
  )
};

export default Header
------------------------------------------------------
const Header = () => {
  return (
    <div className="Header">
      <NavLink
        to={"/gebuchte-sitzungszimmer"}
        state={{ zimmerName: "" }}
        className="gebuchteSZLink"
      >
        <h5>Meine Buchungen</h5>
      </NavLink>
      <NavLink to="/" className="Header-Title">
        <h1>Sitzungszimmer - Finder</h1>
      </NavLink>
      <NavLink to="/" className="suva-title">
        <h5>SUVA</h5>
      </NavLink>
      <Outlet />
    </div>
  );
};
export default Header;
*/