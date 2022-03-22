import React from 'react'
import '../index.css'
import BuchenLogic from './buchenLogic';
import Zimmer from './requirements/zimmer';
import popUpControl from './popUpControlButton'


export default class popupContent extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      zimmername: props.zimmername,
      standort: props.standort,
      stockwerk: props.stockwerk,
      maxP: props.maxP,
      closeModal: true
    };
  }

  render() {
    const test = false
    return (
      <div className='buchen-main'>
        Test
        </div>
    )
  }

}