import React from "react";

const standorte = () => {

  function onPress (number) {
    document.getElementById("standorte-button" + number).classList.add("pressed-button");
  };

  return (
    <div className="standorte-div">
      <button
        type="button"
        id="standorte-button1"
        onClick={() => onPress(1)}
        className="standorte-button"
      >
        Fluhmatt
      </button>
      <button
        type="button"
        id="standorte-button2"
        onClick={() => onPress(2)}
        className="standorte-button"
      >
        Rösslimatt
      </button>
    </div>
  );
};

export default standorte;
