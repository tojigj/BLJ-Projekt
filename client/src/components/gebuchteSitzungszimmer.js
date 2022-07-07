import React, { useState, useEffect } from "react";
import Popup from "./requirements/appointment-popUp";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./CSS/appointmentpopUp.css";
import DatePicker from "react-datepicker";

const port = 5001;

const GebuchteSitzungszimmer = () => {
  const location = useLocation();
  const [sitzungsZimmer, setSitzungsZimmer] = useState([]);
  const [zimmerName, setZimmerName] = useState();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [selectedEditStartDate, setSelectedEditStartDate] = useState();
  const [selectedEditEndDate, setSelectedEditEndDate] = useState();
  const [selectedStartTime, setSelectedStartTime] = useState();
  const [selectedEndTime, setSelectedEndTime] = useState();
  const [showAppointmentPopup, setShowAppointmentPopup] = useState(false);
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
    const pop_status = localStorage.getItem("pop_status");
    let isPop_status = pop_status == 1;
    setShowAppointmentPopup(isPop_status);
  }, [showAppointmentPopup, url]);

  const deleteBuchung = (appointment, zimmerName) => {
    axios
      .post(url, {
        zimmerName: zimmerName,
        startDate: appointment.startDate,
        endDate: appointment.endDate,
        type: "delete",
      })
      .then((response) => {
        console.log("hello man");
      })
      .catch((error) => {
        console.log("error");
      });
    window.location.reload(true);
  };

  const editAppointment = () => {
    axios
      .post(url, {
        zimmerName: zimmerName,
        oldStartDate: startDate,
        oldEndDate: endDate,
        newStartDate:
          selectedEditStartDate.toLocaleDateString() + " " + selectedStartTime,
        newEndDate:
          selectedEditEndDate.toLocaleDateString() + " " + selectedEndTime,
        type: "edit",
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    window.location.reload(true);
  };

  const editBuchung = (appointment, zimmerName) => {
    setZimmerName(zimmerName);
    setStartDate(appointment.startDate);
    setEndDate(appointment.endDate);
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
        <>
          <div key={zimmer.Id} className="gebuchteSZ-component">
            <Popup
              trigger={showAppointmentPopup}
              setTrigger={setShowAppointmentPopup}
            >
              <div className="popup-response">
                <h2>Appointment Erstellt</h2>
                <p>Ein Termin wurde erfolgreich hergestellt</p>
              </div>
              <button
                onClick={() => {
                  setShowAppointmentPopup(false);
                  localStorage.setItem("pop_status", 0);
                }}
                className="buchung-Button-response"
              >
                Ok
              </button>
            </Popup>
            <Popup trigger={showPopup} setTrigger={setShowPopup}>
              <h3>{zimmerName}</h3>
              <div className="appointment-popup-content">
                <div className="appointment-popup-left">
                  <h5>Startdate: {startDate}</h5>
                  <h5>Enddate: {endDate}</h5>
                </div>
                <div className="appointment-popup-right">
                  <form>
                    <DatePicker
                      selected={selectedEditStartDate}
                      required
                      dateFormat="dd/MM/yyyy"
                      onChange={(date) => {
                        setSelectedEditStartDate(date);
                      }}
                      minDate={new Date()}
                      maxDate={selectedEditStartDate}
                      className="form-control date-box appointment-date"
                    />
                    <DatePicker
                      selected={selectedEditEndDate}
                      required
                      dateFormat="dd/MM/yyyy"
                      onChange={(date) => {
                        setSelectedEditEndDate(date);
                      }}
                      minDate={selectedEditStartDate || new Date()}
                      className="form-control date-box appointment-date"
                    />
                    <input
                      required
                      onChange={(event) => {
                        setSelectedStartTime(event.target.value);
                      }}
                      max={selectedEndTime}
                      type="time"
                      pattern="([1]?[0-9]|2[0-3]):[0-5][0-9]"
                      className="form-control time-box"
                    ></input>
                    <input
                      required
                      onChange={(event) => {
                        setSelectedEndTime(event.target.value);
                      }}
                      min={selectedStartTime}
                      type="time"
                      className="form-control time-box"
                    ></input>
                    <button
                      className="buchung-Button"
                      onClick={() => editAppointment()}
                    >
                      Edit
                    </button>
                  </form>
                </div>
              </div>
            </Popup>
            <h2 className="gebuchteSZ-zimmerName">{zimmer.zimmerName}</h2>
            <p className="gebuchteSZ-info">Standort: {zimmer.standortName}</p>
            <p className="gebuchteSZ-info">Stockwerk: {zimmer.stockwerk}</p>
            <p className="gebuchteSZ-info">
              Max. Personen: {zimmer.maxPersonen}
            </p>
            <div className="all-appointments">
              {zimmer.appointments.map((appointment) => {
                if (appointment.startDate > new Date()) {
                }
                return (
                  <div className="appointments-component">
                    <p className="appointments-startDate">
                      Startdate: {appointment.startDate}
                    </p>
                    <p className="appointments-endDate">
                      Enddate: {appointment.endDate}
                    </p>
                    <div className="edit-cancel-buttons">
                      <button
                        className="buchung-Button"
                        onClick={() => {
                          editBuchung(appointment, zimmer.zimmerName);
                          setShowPopup(true);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="buchung-Button"
                        onClick={() =>
                          deleteBuchung(appointment, zimmer.zimmerName)
                        }
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      );
    });
  };

  // Alle gebuchte SZ in einen anderen Array und dann beim hauptrender ausgeben, anstatt mit der Function
  return <div className="gebuchteSZ-main">{showGebuchteSZ()} </div>;
};

export default GebuchteSitzungszimmer;
