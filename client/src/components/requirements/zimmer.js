import React from "react";
import PopUp from "../popUp.js"



export default class Zimmer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      zimmername: props.zimmername,
      standort: props.standort,
      stockwerk: props.stockwerk,
      maxP: props.maxP,
      show: false,
      openInfo: false
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  showInfo = () =>{
    this.setState({ openInfo: !this.state.openInfo });
  }

  szName(){
    return this.zimmername
  }

  render() {
    return (
      <div className="main-sitzungszimmer">
      <PopUp show={this.state.show} handleClose={this.hideModal}>
      <div className="buchungsInfo" >
        <div className="popUp-zimmername" >
          <h2>Zimmer: {this.state.zimmername}</h2>
        </div>
        <div className="popUp-standort">
          <h2>Standort: {this.state.standort}</h2>  
        </div>
        <div className="popUp-stockwerk">
          <h2>Stockwerk: {this.state.stockwerk}</h2>
        </div>
        <div className="popUp-maxP">
          <h2>Max Anzahl Personen: {this.state.maxP}</h2>
        </div>
      </div>
      </PopUp>
      <div className="zimmer-component" onClick={this.showModal}>
        <div className="zimmer-pic"></div>
        <div className="zimmer-main">
          <div className="zimmer-title" >
          <h2 className="zimmer-name">{this.state.zimmername}</h2>
          </div>
          <div className="zimmer-info">
            <p className="zimmer-text">{this.state.standort}</p>
            <p className="zimmer-text">Stockwerk {this.state.stockwerk}</p>
            <p className="zimmer-text">Personen Kapazität: {this.state.maxP}</p>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

//<button className="buchen-button Buchen-Block" onClick="">Buchen</button>
