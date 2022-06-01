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
  let url = "http://localhost:5001/";

  useEffect(() => {
    axios.get(`http://localhost:${port}/sitzungszimmer/`).then((response) => {
      setSitzungsZimmer(response.data);
      setSavedSZ(response.data);
    });

    axios
      .post(url, {
        zimmerName: location.state.zimmerName,
        startDate: location.state.startDate,
        endDate: location.state.endDate,
      })
      .then((response) => {
        console.log(response);
      });
  }, []);

  const filteredSuche = sitzungsZimmer.filter((zimmer) => {
    if (zimmer.gebucht === true) {
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
          <button className="cancel-Buchung">Cancel</button>
        </div>
      );
    });
  };

  // Alle gebuchte SZ in einen anderen Array und dann beim hauptrender ausgeben, anstatt mit der Function
  return <div className="gebuchteSZ-main">{showGebuchteSZ()} </div>;
};

export default GebuchteSitzungszimmer;
