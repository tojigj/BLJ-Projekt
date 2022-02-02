import React from 'react';
import Stockwerke from './requirements/stockwerke';
import Standorte from './requirements/standorte';
import Anz_Pers from './requirements/anz-personen';
import Date from './requirements/datum';
import Seach_Button from './search'

function requirements() {
  return (
  <div className='requirements'>
    <Standorte />
    <Stockwerke />
    <Anz_Pers />
    <Date />
    <Seach_Button />

  </div>

  )
      
      
  
}

export default requirements;

