import React, {useState, useEffect, useDebugValue} from 'react'
import axios from 'axios'
import Zimmer from './requirements/zimmer'
import zimmer from './requirements/zimmer';

const SuchAusgabe = () => {

  const [standOrte, setStandOrte] = useState([])
  const [stockwerke, setStockwerke] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/standorte/").then((response) => {
     setStandOrte(response.data)
    })
  }, [])
  useEffect(() => {
    axios.get("http://localhost:5000/stockwerke/").then((response) => {
      setStockwerke(response.data)
    
    })
  })



  return <div className='Such-Ausgabe'>
    <div className='standort-test'> 
      <div>Standort: {standOrte.filter(v => v.ID == 1)[0]?.StandortName}</div>
  </div>
      <Zimmer/>
  </div>;
};

export default SuchAusgabe;
