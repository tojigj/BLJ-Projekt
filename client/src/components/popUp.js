import React from "react";
import "./sitzungsZimmer.css";
import GebuchteSZ from "./gebuchteSitzungszimmer";
import Zimmer from "./requirements/zimmer";
import BuchenButton from "./buchenButton";

const popUp = ({ handleClose, show, children, zimmerNameProp }) => {
  console.log(zimmerNameProp);

  function checkStatePopup(state) {
    const showHidePopup = state
      ? "popUp display-block popUp-main"
      : "popUp display-none";
    return showHidePopup;
  }

  const zimmerNameSZ = zimmerNameProp;

  const openPopUp = document.getElementsByClassName("zimmer-component");
  const popUpBackground = document.getElementsByClassName("home-div");

  const clickPos = () => {
    openPopUp.addEventListener("click", () => {
      popUpBackground.addEventListener("click", () => {
        return checkStatePopup(handleClose);
      });
    });
  };

  const buchungZimmer = () => {
    console.log(children._self.props.zimmername);
    return (
      <div className="zimmerCommunication">
        <GebuchteSZ zimmerName={children._self.props.zimmername}></GebuchteSZ>
      </div>
    );
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
            {children}
            <button className="BuchenPopUpButton" onClick={buchungZimmer}>
              Buchen
            </button>
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
