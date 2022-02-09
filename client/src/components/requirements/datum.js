import React from "react";

function datum() {
  return (
    <div className="Datum_Buchung">
      <input
        type="date"
        value="2022-02-02"
        min="2022-02-02"
        max="2040-01-05"
        className="form-control date-box"
      ></input>
      <div className="zeit-buchung">
        <input type="time" className="form-control time-box"></input>
        <input type="time" className="form-control time-box"></input>
      </div>
    </div>
  );
}

export default datum;
