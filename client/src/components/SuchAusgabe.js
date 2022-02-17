import React, {useState, useEffect, useDebugValue} from 'react'
import axios from 'axios'
import Zimmer from './requirements/zimmer'


const SuchAusgabe = () => {

  const [standOrte, setStandOrte] = useState([])
  const [stockwerke, setStockwerke] = useState([])
  const [sitzungszimmer, setSitzungszimmer] = useState([])

useEffect(() => {
  axios.get("http://localhost:3001/sitzungszimmer/").then((response) => {
    setSitzungszimmer(response.data)
  })
})
  
  return <div className='Such-Ausgabe'>
    <div className='standort-test'> 
  </div>
      <Zimmer/>
  </div>;
};

export default SuchAusgabe;
