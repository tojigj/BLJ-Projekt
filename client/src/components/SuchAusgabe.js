import React, {useState, useEffect, useDebugValue} from 'react'
import axios from 'axios'
import Zimmer from './requirements/zimmer'


const port = 5001;
const SuchAusgabe = () => {

  const [standOrte, setStandOrte] = useState([])
  const [stockwerke, setStockwerke] = useState([])
  const [sitzungszimmer, setSitzungszimmer] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:${port}/standorte/`).then((response) => {
     setStandOrte(response.data)
    })
  }, [])
  useEffect(() => {
    axios.get(`http://localhost:${port}/sitzungszimmer/`).then((response) => {
      setSitzungsZimmer(response.data)   
    })
  })
useEffect(() => {
  axios.get("http://localhost:3001/sitzungszimmer/").then((response) => {
    setSitzungszimmer(response.data)
  })

})


  return <div className='Such-Ausgabe'>
    <div className='standort-test'> 
      <div>Zimmername: {sitzungsZimmer.filter(v => v.id === 1)[0]?.zimmerName}</div>
  </div>
      
  </div>
};

export default SuchAusgabe;
