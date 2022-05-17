import React, { useState, useEffect } from "react";
import Zimmer from "./requirements/zimmer";
import { useLocation } from "react-router-dom";
import axios from "axios";

const port = 5001;

const GebuchteSitzungszimmer = () => {
  const location = useLocation();
  const [sitzungsZimmer, setSitzungsZimmer] = useState([]);
  const [savedSZ, setSavedSZ] = useState([]);

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

  const shownZimmer = () => {
    return filteredSuche.map((zimmer) => {
      return (
        <div className="gebuchteSZ-component">
          <h2 className="gebuchteSZ-zimmerName">{zimmer.zimmerName}</h2>
          <p className="gebuchteSZ-info">{zimmer.standortName}</p>
          <p className="gebuchteSZ-info">{zimmer.stockwerk}</p>
          <p className="gebuchteSZ-info">{zimmer.maxPersonen}</p>
        </div>
      );
    });
  };

  return <div className="gebuchteSZ-main">{shownZimmer()} </div>; /* (
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
