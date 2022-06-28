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

  const setZimmerNameData = () => {
    axios
      .post(url, {
        zimmerName: zimmerNameSZ,
        startDate:
          selectedStartDate.toLocaleDateString() + " " + selectedStartTime,
        endDate: selectedEndDate.toLocaleDateString() + " " + selectedEndTime,
        type: "create",
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    navigate("/gebuchte-Sitzungszimmer");
  };

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
                minDate={selectedStartDate}
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
                  className="BuchenPopUpButton"
                  onClick={() => setZimmerNameData()}
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
