import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Zimmer from './requirements/zimmer'
import '../index.css'
import BuchenLogic from './buchenLogic'


const port = 5001;
const SuchAusgabe = () => {

  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(prev => !prev)
  }

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

  return (<div className='Such-Ausgabe'>
    <div className='standort-test'>
    
    
      <div className='sitzungsZimmer'>{sitzungsZimmer.map( zimmer =>  <Zimmer zimmername={zimmer.zimmerName} standort={zimmer.standortName} stockwerk={zimmer.stockwerk} maxP={zimmer.maxPersonen} />
      )}
      </div>
    </div>
  </div>
  )
};

/* <button id='openPopup' className='popUpButton' onClick={openModal}>Buchung</button> */




export default SuchAusgabe;