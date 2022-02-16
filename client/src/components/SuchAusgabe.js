import React, {useState, useEffect, useDebugValue} from 'react'
import axios from 'axios'
import Zimmer from './requirements/zimmer'


<<<<<<< HEAD
const port = 5001;
const SuchAusgabe = () => {

  const [standOrte, setStandOrte] = useState([])
  const [sitzungsZimmer, setSitzungsZimmer] = useState([])
=======
const SuchAusgabe = () => {

  const [standOrte, setStandOrte] = useState([])
  const [stockwerke, setStockwerke] = useState([])
  const [sitzungszimmer, setSitzungszimmer] = useState([])
>>>>>>> 2371c0a97e0c4fbd19ea8e55716a9902e8b32050

  useEffect(() => {
    axios.get(`http://localhost:${port}/standorte/`).then((response) => {
     setStandOrte(response.data)
    })
  }, [])
  useEffect(() => {
    axios.get(`http://localhost:${port}/sitzungszimmer/`).then((response) => {
      setSitzungsZimmer(response.data)   
    })
<<<<<<< HEAD
  }, [])
=======
  })
useEffect(() => {
  axios.get("http://localhost:3001/sitzungszimmer/").then((response) => {
    setSitzungszimmer(response.data)
  })
>>>>>>> 2371c0a97e0c4fbd19ea8e55716a9902e8b32050

})


  return <div className='Such-Ausgabe'>
    <div className='standort-test'> 
<<<<<<< HEAD
      <div>Zimmername: {sitzungsZimmer.filter(v => v.id === 1)[0]?.zimmerName}</div>
  </div>
      
  </div>
=======
      <div></div>
  </div>
      <Zimmer/>
  </div>;
>>>>>>> 2371c0a97e0c4fbd19ea8e55716a9902e8b32050
};

export default SuchAusgabe;
