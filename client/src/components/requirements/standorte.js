import React from "react";

const standorte = () => {

  return (
    <div className="standorte-div">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" name="standort" id="roesslimatt" required/>
        <label className="form-check-label" for="roesslimatt">
            Rösslimatt
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" name="standort" id="fluhmatt" required/>
        <label className="form-check-label" for="fluhmatt">
            Fluhmatt
        </label>
      </div>
      <div class="invalid-feedback">
      Bitte wählen sie einen oder beide Standorte aus.
    </div>
    </div>
  );
};

export default standorte;
