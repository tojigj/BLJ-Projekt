import React, { useState, useEffect } from "react";
import Zimmer from "./requirements/zimmer";
import { useLocation } from "react-router-dom";
import axios from "axios";

const port = 5001;

const GebuchteSitzungszimmer = () => {
  const location = useLocation();
  const [sitzungsZimmer, setSitzungsZimmer] = useState([]);
  const [savedSZ, setSavedSZ] = useState([]);
  let testArr = [];

  useEffect(() => {
    axios.get(`http://localhost:${port}/sitzungszimmer/`).then((response) => {
      setSitzungsZimmer(response.data);
      setSavedSZ(response.data);
    });
  }, []);

  const filteredSuche = sitzungsZimmer.filter((zimmer) => {
    if (
      location.state.zimmerName
        .toLowerCase()
        .split(" ")
        .join("")
        .includes(zimmer.zimmerName.split(" ").join("").toLowerCase())
    ) {
      return zimmer;
    }
  });

  const showGebuchteSZ = () => {
    return filteredSuche.map((zimmer) => {
      return (
        <div className="gebuchteSZ-component">
          <h2 className="gebuchteSZ-zimmerName">{zimmer.zimmerName}</h2>
          <p className="gebuchteSZ-info">Standort: {zimmer.standortName}</p>
          <p className="gebuchteSZ-info">Stockwerk: {zimmer.stockwerk}</p>
          <p className="gebuchteSZ-info">Max. Personen: {zimmer.maxPersonen}</p>
        </div>
      );
    });
  };

  testArr.push(showGebuchteSZ());
  console.log(testArr + " this is a tessttt");

  // Alle gebuchte SZ in einen anderen Array und dann beim hauptrender ausgeben, anstatt mit der Function
  return <div className="gebuchteSZ-main">{testArr} </div>; /* (
    <div id="gebuchteSZ-list">
      {filteredSuche.map((item, index) => (
        <div className="gebuchteSZ-main">
          <div className="gebuchteSZ-item" key={index}>
            <div className="gebuchteSZ-name">{`Name: ${item.zimmerName}`}</div>
            <div className="gebuchteSZ-standort">{`Standort: ${item.standort}`}</div>
          </div>
        </div>
      ))}
    </div>
  );*/
};
export default GebuchteSitzungszimmer;
