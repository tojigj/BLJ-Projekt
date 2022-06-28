import React, { useState, useEffect } from "react";
import "./CSS/popUp.css";
import GebuchteSZ from "./gebuchteSitzungszimmer";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";

const PopUp = ({ handleClose, show, children, zimmerNameProp }) => {
  const [selectedStartDate, setSelectedStartDate] = useState();
  const [selectedEndDate, setSelectedEndDate] = useState();
  const [selectedStartTime, setSelectedStartTime] = useState();
  const [selectedEndTime, setSelectedEndTime] = useState();
  const location = useLocation();

  let gebuchteSitzungszimmer = [];
  //Logik Display Popup
  function checkStatePopup(state) {
    const showHidePopup = state
      ? "popUp display-block popUp-main"
      : "popUp display-none";
    return showHidePopup;
  }

  const setZimmerNameData = () => {
    navigate("./gebuchte-sitzungszimmer", {
      state: {
        zimmerName: children._self.props.zimmername,
        startDate: selectedStartDate.toDateString() + " " + selectedStartTime,
        endDate: selectedEndDate.toDateString() + " " + selectedEndTime,
      },
    });
  };

  const navigate = useNavigate();
  const zimmerNameSZ = children._self.props.zimmername;

  const [zimmerNameB, setZimmerNameB] = useState([]);

  return (
    <div className={checkStatePopup(show)}>
      <div className="popUp-Content">
        <button
          type="button"
          onClick={handleClose}
          className="closePopUpButton"
        >
          X
        </button>
        <div className="divider-div">
          <div className="popUp-info">
            <h2 className="popUp-zimmername">{zimmerNameSZ}</h2>
            {children}
          </div>
          <div className="popUp-booking-site">
            <form className="popUp-createAppointment">
              <DatePicker
                selected={selectedStartDate}
                required
                dateFormat="dd/MM/yyyy"
                onChange={(date) => {
                  setSelectedStartDate(date);
                }}
                minDate={new Date()}
                className="form-control date-box"
              />
              <DatePicker
                selected={selectedEndDate}
                required
                dateFormat="dd/MM/yyyy"
                onChange={(date) => {
                  setSelectedEndDate(date);
                }}
                minDate={new Date()}
                className="form-control date-box"
              />
              <div className="zeit-buchung">
                <input
                  required
                  onChange={(event) => {
                    setSelectedStartTime(event.target.value);
                  }}
                  type="time"
                  className="form-control time-box"
                ></input>
                <input
                  required
                  onChange={(event) => {
                    setSelectedEndTime(event.target.value);
                  }}
                  type="time"
                  className="form-control time-box"
                ></input>
                <button
                  className="BuchenPopUpButton"
                  onClick={() => {
                    setZimmerNameData();
                  }}
                >
                  Buchen
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
