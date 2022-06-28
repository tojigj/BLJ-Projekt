import GebuchteSZ from "./gebuchteSitzungszimmer";
import "./CSS/navbar.css"

export const navItems = [
    {
      id: 1,
      title: "☰",
      path: "./services",
      cName: "nav-item",
    },
    {
      id: 2,
      title: "Meine Buchungen",
      path: "./gebuchte-sitzungszimmer",
      cName: "b-nav-item",
    },
  ];
  
  export const serviceDropdown = [
    {
      id: 1,
      title: "Meine Buchungen",
      path: "./gebuchte-sitzungszimmer",
      cName: "submenu-item",
    },
  ];