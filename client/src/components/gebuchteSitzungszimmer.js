import React, { useState, useEffect } from "react";
import Zimmer from "./requirements/zimmer";

import { useLocation } from "react-router-dom";
import axios from "axios";

const port = 5001;

const GebuchteSitzungszimmer = () => {
  const location = useLocation();
  const [sitzungsZimmer, setSitzungsZimmer] = useState([]);
  let url = "http://localhost:5001/";

  useEffect(() => {
    axios
      .get(`http://localhost:${port}/sitzungszimmer/`)
      .then((response) => {
        setSitzungsZimmer(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .post(url, {
        zimmerName: location.state.zimmerName,
        startDate: location.state.startDate,
        endDate: location.state.endDate,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteRoom = (zimmerId) => {
    axios
      .post(url, { cancelZimmerID: zimmerId })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const filteredSuche = sitzungsZimmer.filter((zimmer) => {
    if (zimmer.appointments.length !== 0) {
      return zimmer;
    }
  });

  const showGebuchteSZ = () => {
    return filteredSuche.map((zimmer) => {
      zimmer.appointments.forEach((appointment) => {
        return (
          <div className="gebuchteSZ-component">
            <h2 className="gebuchteSZ-zimmerName">{zimmer.zimmerName}</h2>
            <p className="gebuchteSZ-info">Standort: {zimmer.standortName}</p>
            <p className="gebuchteSZ-info">Stockwerk: {zimmer.stockwerk}</p>
            <p className="gebuchteSZ-info">
              Max. Personen: {zimmer.maxPersonen}
            </p>
            <p className="appointments-startDate">
              Startdate: {appointment.startDate}
            </p>
            <p className="appointments-endDate">
              Enddate: {appointment.endDate}
            </p>
            <button className="cancel-Buchung" onClick={deleteRoom(zimmer.id)}>
              Cancel
            </button>
          </div>
        );
      });
    });
  };

  // Alle gebuchte SZ in einen anderen Array und dann beim hauptrender ausgeben, anstatt mit der Function
  return <div className="gebuchteSZ-main">{showGebuchteSZ()} </div>;
};

export default GebuchteSitzungszimmer;
