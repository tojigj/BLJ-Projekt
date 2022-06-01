import React, { useState, useEffect } from "react";
import "./sitzungsZimmer.css";
import GebuchteSZ from "./gebuchteSitzungszimmer";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";

const PopUp = ({ handleClose, show, children, zimmerNameProp }) => {
  const [selectedStartDate, setSelectedStartDate] = useState();
  const [selectedEndDate, setSelectedEndDate] = useState();
  const [selectedStartTime, setSelectedStartTime] = useState();
  const [selectedEndTime, setSelectedEndTime] = useState();
  const [selectedStartDateTime, setSelectedStartDateTime] = useState();
  const [selectedEndDateTime, setSelectedEndDateTime] = useState();

  let gebuchteSitzungszimmer = [];
  //Logik Display Popup
  function checkStatePopup(state) {
    const showHidePopup = state
      ? "popUp display-block popUp-main"
      : "popUp display-none";
    return showHidePopup;
  }

  const handleStartDateChange = (value) => {
    if (selectedStartTime) {
      setSelectedStartDateTime(value.toDateString() + " " + selectedEndTime);
    } else {
      setSelectedStartDateTime(value.toDateString() + " 00:00");
    }
  };

  const handleEndDateChange = (value) => {
    if (selectedEndTime) {
      setSelectedEndDateTime(value.toDateString() + " " + selectedEndTime);
    } else {
      setSelectedEndDateTime(value.toDateString() + " 00:00");
    }
  };

  const createNewAppointment = () => {
    axios
      .post("http://localhost:5001/createAppointments", {
        startDate: selectedStartDateTime,
        endDate: selectedEndDateTime,
      })
      .then((response) => {
        console.log(response);
      });
  };

  const navigate = useNavigate();
  const location = useLocation();
  const zimmerNameSZ = zimmerNameProp;

  const [zimmerNameB, setZimmerNameB] = useState([]);

  const setZimmerNameData = () => {
    navigate("./gebuchte-sitzungszimmer", {
      state: { zimmerName: children._self.props.zimmername },
    });
    /*navigate("/gebuchte-sitzungszimmer");
    console.log(children._self.props);
    gebuchteSitzungszimmer += children._self.props;
    let tempArray = JSON.stringify(gebuchteSitzungszimmer);
    fs.writeFile("gebuchteSZ.json", tempArray).then(console.log(tempArray));*/
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
          <div className="popUp-info">{children}</div>
          <div className="popUp-PicName">
            <div className="popUp-pic"></div>
            <h2 className="popUp-zimmername">{zimmerNameSZ}</h2>
            <div className="Datum_Buchung">
              <DatePicker
                selected={selectedStartDate}
                dateFormat="dd/MM/yyyy"
                onChange={(date) => {
                  setSelectedStartDate(date);
                  handleStartDateChange(date);
                }}
                minDate={new Date()}
                className="form-control date-box"
              />
              <DatePicker
                selected={selectedEndDate}
                dateFormat="dd/MM/yyyy"
                onChange={(date) => {
                  setSelectedEndDate(date);
                  handleEndDateChange(date);
                }}
                minDate={new Date()}
                className="form-control date-box"
              />
              <div className="zeit-buchung">
                <input
                  onChange={(event) => {
                    setSelectedStartTime(event.target.value);
                  }}
                  type="time"
                  className="form-control time-box"
                ></input>
                <input
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
                    createNewAppointment();
                  }}
                >
                  Buchen
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
