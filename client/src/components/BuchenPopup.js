import { useState } from "react";
import BuchenPopup from './BuchenControler'
import '../index.css'
import Zimmer from './requirements/zimmer'


export default function Button() {
  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  return (
    <div className="buchenPopUp">
      <button className="popUp-Button" onClick={(e) => setVisibility(!visibility)}>Buchen</button>

      <BuchenPopup
        onClose={popupCloseHandler}
        show={visibility}
        title="BuchenHandler"
      >
        <div className="popUp-Content">
         <h1>Zimmer Buchen Test</h1>
         <h2>Hier Zimmer buchen</h2>
         <h2>{Zimmer.zimmername}</h2>
        </div>
        
      </BuchenPopup>
      
    </div>

  );
  console.log(Zimmer)
}
