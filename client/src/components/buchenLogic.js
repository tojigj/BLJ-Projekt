import React from 'react'
import '../index.css'
import BuchenPopup from './buchenPopupContent'


const BuchenLogic = ({ showModal, setShowModal}) => {

    return <>{showModal ? <div className='test2'><BuchenPopup /></div> : null} </>
  
}

export default BuchenLogic