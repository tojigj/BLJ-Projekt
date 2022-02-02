import React from 'react';


function datum() {
  return <div className='Zeit_Buchung'>
      <input type='date' value='2022-02-02' min='2022-02-02' max='2040-01-05'></input>
      <input type='time' className='von_time'></input>
      <input type='time' className='bis_time'></input>
      
  </div>;
}

export default datum;
