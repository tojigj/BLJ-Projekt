import React from "react";
import "../CSS/appointmentpopUp.css";

const Popup = (props) => {
  return props.trigger ? (
    <div className="appointment-popup">
      <div className="appointment-popup-inner">
        <button
          className="close-appointment-popup"
          onClick={() => {
            props.setTrigger(false);
            localStorage.setItem("pop_status", 0);
          }}
        >
          X
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
