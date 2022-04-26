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
    <div className="Header">
      <NavLink
        to={"/gebuchte-sitzungszimmer"}
        state={{ zimmerName: "" }}
        className="gebuchteSZLink"
      >
        <h5>Gebuchte Sitzungszimmer</h5>
      </NavLink>
      <NavLink to="/" className="Header-Title">
        <h1>Sitzungszimmer - Finder</h1>
      </NavLink>
      <h1 className="suva-title">Suva</h1>
      <Outlet />
    </div>
  );
};

export default Header;
