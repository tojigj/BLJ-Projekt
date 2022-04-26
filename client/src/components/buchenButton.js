import React from "react";
import "./sitzungsZimmer.css";

const BuchenButton = (zimmerNameBuchung) => {
  const checkSignalBuchung = () => {
    let signalBuchung = true;
    let wurdeGebucht = false;
    if (signalBuchung === true) {
      console.log("Wurde gebucht");
      wurdeGebucht = true;
      console.log(zimmerNameBuchung);
    }
  };

  return <div></div>;
};

export default BuchenButton;
