import React, { useState, useEffect } from "react";

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
  }, [location.state, url]);

  const deleteBuchung = (appointment, zimmerName) => {
    axios
      .post(url, {
        zimmerName: zimmerName,
        startDate: appointment.startDate,
        endDate: appointment.endDate,
        type: "delete",
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    window.location.reload(false);
  };

  const filteredData = sitzungsZimmer.filter((zimmer) => {
    if (zimmer.appointments.length !== 0) {
      return zimmer;
    }
    return null;
  });

  const showGebuchteSZ = () => {
    return filteredData.map((zimmer) => {
      return (
        <div key={zimmer.Id} className="gebuchteSZ-component">
          <h2 className="gebuchteSZ-zimmerName">{zimmer.zimmerName}</h2>
          <p className="gebuchteSZ-info">Standort: {zimmer.standortName}</p>
          <p className="gebuchteSZ-info">Stockwerk: {zimmer.stockwerk}</p>
          <p className="gebuchteSZ-info">Max. Personen: {zimmer.maxPersonen}</p>
          <div className="all-appointments">
            {zimmer.appointments.map((appointment) => {
              return (
                <div className="appointments-component">
                  <p className="appointments-startDate">
                    Startdate: {appointment.startDate}
                  </p>
                  <p className="appointments-endDate">
                    Enddate: {appointment.endDate}
                  </p>
                  <button
                    className="cancel-Buchung"
                    onClick={() =>
                      deleteBuchung(appointment, zimmer.zimmerName)
                    }
                  >
                    Cancel
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      );
    });
  };

  // Alle gebuchte SZ in einen anderen Array und dann beim hauptrender ausgeben, anstatt mit der Function
  return <div className="gebuchteSZ-main">{showGebuchteSZ()} </div>;
};

export default GebuchteSitzungszimmer;
