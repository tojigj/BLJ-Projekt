import React, { useState, useEffect } from "react";
import { Checkbox } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { BsFillCaretDownFill } from "react-icons/bs";
import { BsFillCaretUpFill } from "react-icons/bs";
import "./CSS/mainDropdown.css";

const checkboxesList = ["Fluhmatt", "Rösslimatt"];

const getDefaultCheckboxes = () =>
  checkboxesList.map((checkbox) => ({
    name: checkbox,
    checked: false,
  }));

const Section = ({
  onStockwerkChange,
  onPersonenChange,
  stockwerke,
  onStandortChange,
  defaultCheckboxes,
  onSubmit,
  onStartDateChange,
  onEndDateChange,
}) => {
  const [selectedStartDate, setSelectedStartDate] = useState();
  const [selectedEndDate, setSelectedEndDate] = useState();
  const [selectedStandort, setSelectedStandort] = useState();
  const [selectedStockwerk, setSelectedStockwerk] = useState();
  const [selectedAnzPersonen, setSelectedAnzPersonen] = useState();
  const [selectedStartTime, setSelectedStartTime] = useState();
  const [selectedEndTime, setSelectedEndTime] = useState();
  const [checkboxes, setCheckboxes] = useState(
    defaultCheckboxes || getDefaultCheckboxes()
  );

  const [isActive, setisActive] = useState(false);
  const showDropdown = isActive
    ? "dropdown-content showDropdown"
    : "dropdown-content hideDropdown";

  function setCheckbox(index, checked) {
    const newCheckboxes = [...checkboxes];
    newCheckboxes[index].checked = checked;
    setCheckboxes(newCheckboxes);
  }

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

  const handleStandortChange = () => {
    const trueCheckboxes = checkboxes.filter((checkbox) => {
      return checkbox.checked === true;
    });
    onStandortChange(trueCheckboxes);
  };

  const handleStartDateChange = (value) => {
    if (selectedStartTime) {
      onStartDateChange(value, selectedStartTime);
    } else {
      onStartDateChange(value, "00:00");
    }
  };

  const handleEndDateChange = (value) => {
    if (selectedEndTime) {
      onEndDateChange(value, selectedEndTime);
    } else {
      onEndDateChange(value, "00:00");
    }
  };
  // Logik Icon Dropdown
  const IconDropdown = isActive ? (
    <BsFillCaretUpFill />
  ) : (
    <BsFillCaretDownFill />
  );

  return (
    <div className="dropdown-main">
      <div className="dropdown-button" onClick={(e) => setisActive(!isActive)}>
        Weitere Filter
        <span className="dropdownIcon">{IconDropdown}</span>
      </div>
      <div className={showDropdown}>
        <div className="requirements">
          <div className="standorte-div">
            {checkboxes.map((checkbox, i) => {
              return (
                <div>
                  <input
                    type="checkbox"
                    checked={checkbox.checked}
                    onChange={(e) => {
                      setCheckbox(i, e.target.checked);
                      handleStandortChange();
                    }}
                  />
                  <label className="standorte-label">{checkbox.name}</label>
                </div>
              );
            })}
          </div>

          <div className="component-div">
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={handleStockwerkChange}
            >
              <option value="" defaultValue>
                Stockwerke...
              </option>
              {stockwerke.map((stockwerk) => {
                return (
                  <option value={stockwerk} key={stockwerk}>
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
            </div>
          </div>

          <div>
            <button
              className="search_Button"
              onClick={() => {
                handleEndDateChange(selectedEndDate);
                handleStartDateChange(selectedStartDate);
                onSubmit();
                setisActive(!isActive);
              }}
            >
              Ergebnisse Anzeigen
            </button>
          </div>
        </div>
      </div>
    </div>
  ); 
};

export default Section;
