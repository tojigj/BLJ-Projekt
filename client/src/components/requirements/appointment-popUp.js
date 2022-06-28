import React from "react";
import "../CSS/appointmentpopUp.css";

const Popup = (props) => {
  return props.trigger ? (
    <div className="appointment-popup">
      <div className="appointment-popup-inner">
        <button
          className="close-appointment-popup"
          onClick={() => props.setTrigger(false)}
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
