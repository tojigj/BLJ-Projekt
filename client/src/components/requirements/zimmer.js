import React, {useState, useEffect} from 'react'
import BuchenLogic from '../buchenLogic';
import BuchenContent from '../buchenPopupContent'
import PopoUpControl from '../popUpControlButton'

export default class Zimmer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      zimmername: props.zimmername,
      standort: props.standort,
      stockwerk: props.stockwerk,
      maxP: props.maxP
    };
  }

/* Button als einzelnens Component*/

  render() {
    
    return (
        <div className="zimmer-component">
        <div className="zimmer-pic"></div>
        <div className="zimmer-main">  
          <PopoUpControl />
          <h2 className="zimmer-name Buchen-Block">{this.state.zimmername}</h2> 
          <div className="buchen-button Buchen-Block"> </div>
          <div className="zimmer-info">
            <p className="zimmer-text">{this.state.standort}</p>
            <p className="zimmer-text">{this.state.stockwerk} Stockwerk</p>
            <p className="zimmer-text">Max. Personen: {this.state.maxP}</p>
          </div>
        </div>
      </div>
    )
  }

  getZimmername(){
    return this.state.zimmername
  }
  getStandort(){
    return this.state.standort
  }



}

//<button className="buchen-button Buchen-Block" onClick="">Buchen</button>