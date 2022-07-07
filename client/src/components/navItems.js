import GebuchteSZ from "./gebuchteSitzungszimmer";
import "./CSS/navbar.css"

export const navItems = [
    {
      id: 1,
      title: "☰",
      path: "./",
      cName: "nav-item",
    },
    {
      id: 3,
      title: "Home",
      path: "./",
      cName: "b-nav-item",
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
      id: 2,
      title: "Home",
      path: "./",
      cName: "submenu-item",
    },
    {
      id: 1,
      title: "Meine Buchungen",
      path: "./gebuchte-sitzungszimmer",
      cName: "submenu-item",
    },
];