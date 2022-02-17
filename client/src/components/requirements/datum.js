import React, { useState } from "react";
import createUtilityClassName from "react-bootstrap/esm/createUtilityClasses";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Datum = () => {
  const [selectedDate, setselectedDate] = useState();
  return (
    <div className="Datum_Buchung">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setselectedDate(date)}
        dateFormat="dd/MM/yyyy"
        minDate={new Date()}
        className="form-control date-box"
      />
      <div className="zeit-buchung">
        <input type="time" className="form-control time-box"></input>
        <input type="time" className="form-control time-box"></input>
      </div>
    </div>
  );
};

export default Datum;


