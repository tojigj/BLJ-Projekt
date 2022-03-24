import React from 'react'
import './sitzungsZimmer.css'

const popUp = ({handleClose, show, children}) => {
    const showHidePopup = show ? "popUp display-block" : "popUp display-none"

  return (
    <div className={showHidePopup}>
      <div className='popUp-main'> 

        <div className='popUp-header'>
          <button type='button' onClick={handleClose} className='closePopUpButton'>X</button>
          <h1 className="Buchung-Title">Buchung SZ</h1>
        </div>
        <div className='leftSection-Popup'>
            <div className="popUp-pic"></div>
            <button className='BuchenPopUpButton'>Buchen</button>
        </div>
        <div className='popUp-Content'>
            {children}
        </div>
        
      </div>
      
    </div>
  )
}

export default popUp
