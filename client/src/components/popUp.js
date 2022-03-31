import React from "react";
import "./sitzungsZimmer.css";

const popUp = ({ handleClose, show, children, zimmerNameProp }) => {
  const clickEvent = () => {};

  const showHidePopup = show
    ? "popUp display-block popUp-main"
    : "popUp display-none";
  const zimmerNameSZ = zimmerNameProp;
  return (
    <div className={showHidePopup}>
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
            {children} <button className="BuchenPopUpButton">Buchen</button>
          </div>
          <div className="popUp-PicName">
            <div className="popUp-pic"></div>
            <h2 className="popUp-zimmername">{zimmerNameSZ}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default popUp;
