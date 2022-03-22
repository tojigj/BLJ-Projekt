import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Section = ({ onStockwerkChange, onPersonenChange, stockwerke }) => {
  const [selectedDate, setSelectedDate] = useState();
  const [selectedStandort, setSelectedStandort] = useState();
  const [selectedStockwerk, setSelectedStockwerk] = useState();
  const [selectedAnzPersonen, setSelectedAnzPersonen] = useState();
  const [selectedStartTime, setSelectedStartTime] = useState();
  const [selectedEndTime, setSelectedEndTime] = useState();

  const handlePersonenChange = (event) => {
    const { value } = event.target;
    setSelectedAnzPersonen(value);
    onPersonenChange(value);
  };

  const handleStockwerkChange = (event) => {
    const { value } = event.target;
    setSelectedStockwerk(value);
    onStockwerkChange(value);
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

      <div className="component-div">
        <select
          className="form-select"
          aria-label="Default select example"
          onChange={handleStockwerkChange}
        >
          <option value="" selected>
            Stockwerke...
          </option>
          {stockwerke.map((stockwerk) => {
            return (
              <option value="number" key={stockwerk}>
                Stockwerk {stockwerk}
              </option>
            );
          })}
        </select>
      </div>

      <div className="component-div">
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
};

export default Section;
