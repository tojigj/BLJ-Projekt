import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './filterSection.css'

const Section = ({ onPersonenChange }) => {
  const [selectedDate, setSelectedDate] = useState();
  const [selectedStandort, setSelectedStandort] = useState();
  const [selectedStockwerk, setSelectedStockwerk] = useState();
  const [selectedAnzPersonen, setSelectedAnzPersonen] = useState();
  const [selectedStartTime, setSelectedStartTime] = useState();
  const [selectedEndTime, setSelectedEndTime] = useState();

  const handlePersonenChange = (event) => {
    const value  = event.target.value;
    setSelectedAnzPersonen(value);
    onPersonenChange(value);
    console.log( event.target.value)
    console.log(value)
  };

  return (
    <div className="requirements">
      <div className="standorte-div">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="standort"
            id="roesslimatt"
            required
          />
          <label className="form-check-label" for="roesslimatt">
            Rösslimatt
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            name="standort"
            id="fluhmatt"
            required
          />
          <label className="form-check-label" for="fluhmatt">
            Fluhmatt
          </label>
        </div>
      </div>

      <div className="stockwerk-component">
        <select className="form-select" aria-label="Default select example">
          <option selected>Stockwerke...</option>
          <option value="1">Stockwerk 1</option>
          <option value="2">Stockwerk 2</option>
          <option value="3">Stockwerk 3</option>
          <option value="4">Stockwerk 4</option>
          <option value="5">Stockwerk 5</option>
          <option value="6">Stockwerk 6</option>
        </select>
      </div>

      <div className="anz-personen-component">
        <input
          className="form-control"
          type="number"
          placeholder="Anz. Personen"
          onChange={handlePersonenChange}
          
        />
      </div>

      <div className="Datum_Buchung">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
          className="form-control date-box"
        />
        <div className="zeit-buchung">
          <input type="time" className="form-control time-box"></input>
          <input type="time" className="form-control time-box"></input>
        </div>
      </div>

      <div>
        <button className="Search_Button">Suchen</button>
      </div>
    </div>
  );
}

export default Section;
