import React from 'react'
import '../index.css'


export default class BuchenPopup extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {
        zimmername: props.zimmername,
        standort: props.standort,
        stockwerk: props.stockwerk,
        maxP: props.maxP
      };
    }
    
    render() {
      return (
        <div className="buchenStyle" id="popUp-Container" >
            <div className="buchen-main">
                <h1>{this.state.zimmername}</h1>
                <h2>{this.state.standort}</h2>
                <h2>{this.state.stockwerk}</h2>
                <h2>{this.state.maxP}</h2>
               <button id="closePopup" className="closePopupButton">Close</button>
        </div>
        </div>
      )
    }
  }



