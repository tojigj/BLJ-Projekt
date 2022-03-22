import React from 'react'
import '../index.css'
import BuchenPopup from './buchenPopupContent'

/* Zuerst wird zimmer ausgeführt und dann BuchenPopUP in div -> Irgendwie false zuerst vergeben*/

const BuchenLogic = ({ showModal}) => {

        function modelCheck() {
            let button = document.getElementById('openPopup')
            return <div>{button}</div>
        }
        return (<div>
            
            {showModal ? <div className='test2'><BuchenPopup /></div> : null}
        </div>)
    }
        
     
           


export default BuchenLogic