import React, { useState, useEffect } from "react";
import "./sitzungsZimmer.css";
import GebuchteSZ from "./gebuchteSitzungszimmer";
import { useNavigate, useLocation } from "react-router-dom";

const PopUp = ({ handleClose, show, children, zimmerNameProp }) => {
  let gebuchteSitzungszimmer = [];

  function checkStatePopup(state) {
    const showHidePopup = state
      ? "popUp display-block popUp-main"
      : "popUp display-none";
    return showHidePopup;
  }

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
          <div className="popUp-info">
            {children}
            <button
              className="BuchenPopUpButton"
              onClick={() => setZimmerNameData()}
            >
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

export default PopUp;
