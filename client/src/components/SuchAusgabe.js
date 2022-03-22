import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Zimmer from './requirements/zimmer'
import '../index.css'
import BuchenLogic from './buchenLogic'
import { render } from 'express/lib/response'

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
      setSitzungsZimmer(response.data)   
    })
  }, [])
  /* turn into foreach and give button plus popUp info*/

    
  return (<div className='Such-Ausgabe'>
    <div className='standort-test'>
      <div className='sitzungsZimmer'>
           {sitzungsZimmer.map( zimmer =>  <Zimmer zimmername={zimmer.zimmerName} standort={zimmer.standortName} stockwerk={zimmer.stockwerk} maxP={zimmer.maxPersonen} />
         )}     
      </div>
    </div>
  </div>
  
  )
  
}


/*
        
*/

export default SuchAusgabe;