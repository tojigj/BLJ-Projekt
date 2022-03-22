import React, {useState, useEffect} from 'react'
import BuchenLogic from './buchenLogic';

export default class Zimmer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

/* Button als einzelnens Component*/

  render() {
    
    return (
            <div>
           <button id='openPopup' className='popUpButton' onClick={() => this.setState({showModal: this.state.showModal = !this.state.showModal})}>Buchung</button>
           <BuchenLogic showModal={this.state.showModal} /> 
           </div>
    )
  }



}

//<button className="buchen-button Buchen-Block" onClick="">Buchen</button>