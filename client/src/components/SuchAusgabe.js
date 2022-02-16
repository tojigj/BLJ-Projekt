import React, {useState, useEffect, useDebugValue} from 'react'
import axios from 'axios'
import Zimmer from './requirements/zimmer'

const port = 5001;
const SuchAusgabe = () => {
  const [standOrte, setStandOrte] = useState([])
  const [sitzungsZimmer, setSitzungsZimmer] = useState([])

  useEffect(() => {
    axios.get(`http://localhost:${port}/standorte/`).then((response) => {
     setStandOrte(response.data)
    })
  }, [])
  useEffect(() => {
    axios.get(`http://localhost:${port}/sitzungszimmer/`).then((response) => {
      setSitzungszimmer(response.data)   
    })
  }, [])
console.log(sitzungsZimmer)
  return <div className='Such-Ausgabe'>
<<<<<<< HEAD
    <div className='standort-test'> 
      <div>Zimmername: {sitzungszimmer.filter(v => v.id === 1)[0]?.zimmerName}</div>
  </div>
      
  </div>
=======
    <div className='standort-test'>
      <div>{sitzungsZimmer.map( zimmer => <Zimmer zimmername={zimmer.zimmerName} standort={zimmer.standortName} stockwerk={zimmer.stockwerk} maxP={zimmer.maxPersonen} />)}</div>
    </div>
  </div>;
>>>>>>> 098a7f807aedfc4751c27de487fbe85d5de4c6e5
};

export default SuchAusgabe;
