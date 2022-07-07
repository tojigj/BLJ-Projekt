import React, { useState, useEffect } from "react";
import "./CSS/popUp.css";
import Popup from "./requirements/appointment-popUp";
import GebuchteSZ from "./gebuchteSitzungszimmer";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "./CSS/appointmentpopUp.css";

const PopUp = ({ handleClose, show, children }) => {
  const [selectedStartDate, setSelectedStartDate] = useState();
  const [selectedEndDate, setSelectedEndDate] = useState();
  const [selectedStartTime, setSelectedStartTime] = useState();
  const [selectedEndTime, setSelectedEndTime] = useState();
  const [showErrorPopUp, setShowErrorPopUp] = useState(false);
  const location = useLocation();
  let url = "http://localhost:5001/";

  //Logik Display Popup
  function checkStatePopup(state) {
    const showHidePopup = state
      ? "popUp display-block popUp-main"
      : "popUp display-none";
    return showHidePopup;
  }

  const navigate = useNavigate();

  const zimmerNameSZ = children._self.props.zimmername;

  const setZimmerNameData = (e) => {
    e.preventDefault();
    axios
      .post(url, {
        startDate:
          selectedStartDate.toLocaleDateString() + " " + selectedStartTime,
        endDate: selectedEndDate.toLocaleDateString() + " " + selectedEndTime,
        zimmerName: zimmerNameSZ,
        type: "create",
      })
      .then(function (response) {
        if (response.data === true) {
          localStorage.removeItem("pop_status");
          localStorage.setItem("pop_status", 1);
          navigate("/gebuchte-Sitzungszimmer");
        }
        setShowErrorPopUp(true);
      })
      .catch(function (error) {});
  };

  return (
    <div className={checkStatePopup(show)}>
      <div className="appointment-popup">
        <div className="popUp-Content appointment-popup-inner">
          <h3>{zimmerNameSZ}</h3>
          <button
            type="button"
            onClick={handleClose}
            className="close-appointment-popup"
          >
            X
          </button>
          <div className="appointment-popup-content">
            <div className="appointment-popup-left">{children}</div>
            <div className="appointment-popup-right">
              <form className="popUp-createAppointment">
                <DatePicker
                  selected={selectedStartDate}
                  required
                  dateFormat="dd/MM/yyyy"
                  onChange={(date) => {
                    setSelectedStartDate(date);
                  }}
                  minDate={new Date()}
                  maxDate={selectedStartDate}
                  className="form-control date-box"
                />
                <DatePicker
                  selected={selectedEndDate}
                  required
                  dateFormat="dd/MM/yyyy"
                  onChange={(date) => {
                    setSelectedEndDate(date);
                  }}
                  minDate={selectedStartDate || new Date()}
                  className="form-control date-box"
                />
                <div className="zeit-buchung">
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
                    onClick={(e) => setZimmerNameData(e)}
                  >
                    Buchen
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Popup trigger={showErrorPopUp} setTrigger={setShowErrorPopUp}>
        <h5>
          Ein Fehler ist aufgetreten.
          <br /> Der Eingegebene Termin überscheneidet sich mit einem anderen.{" "}
        </h5>
      </Popup>
    </div>
  );
};

export default PopUp;
