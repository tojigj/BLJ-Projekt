import React from "react";
import PopUp from "../popUp.js";
import GebuchteSZ from "../gebuchteSitzungszimmer";

export default class Zimmer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      zimmername: props.zimmername,
      standort: props.standort,
      stockwerk: props.stockwerk,
      maxP: props.maxP,
      OnZimmerClick: props.OnZimmerClick,
      show: false,
      openInfo: false,
      buchungsSignal: false,
      onErrorPopup: true,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  //State Display Popup
  showModal = () => {
    this.setState({ show: true });
  };
  //State Non-Display Popup
  hideModal = () => {
    this.setState({ show: false });
  };

  showInfo = () => {
    this.setState({ openInfo: !this.state.openInfo });
  };

  showErrorPopup = () => {
    this.setState({ onErrorPopup: true });
  };

  render() {
    return (
      <div className="main-sitzungszimmer">
        <PopUp
          show={this.state.show}
          handleClose={this.hideModal}
          showErrorPopUp={this.showErrorPopup}
        >
          <div className="buchungsInfo">
            <div className="popUp-standort">
              <h5>Standort: {this.state.standort}</h5>
            </div>
            <div className="popUp-stockwerk">
              <h5>Stockwerk: {this.state.stockwerk}</h5>
            </div>
            <div className="popUp-maxP">
              <h5>Max Anzahl Personen: {this.state.maxP}</h5>
            </div>
          </div>
        </PopUp>
        <div>
          {this.state.buchungsSignal ? <GebuchteSZ></GebuchteSZ> : null}
        </div>
        {/*<div className="zimmer-zusammenhalt">
          <div className="zimmer-pic"></div>*/}
        <div className="zimmer-component" onClick={this.showModal}>
          <div className="zimmer-main">
            <div className="zimmer-title">
              <h2 className="zimmer-name">{this.state.zimmername}</h2>
            </div>
          </div>
          <div className="zimmer-info">
            <p className="zimmer-text">{this.state.standort}</p>
            <p className="zimmer-text">Stockwerk {this.state.stockwerk}</p>
            <p className="zimmer-text">Personen Kapazität: {this.state.maxP}</p>
          </div>
        </div>
      </div>
      /*</div>*/
    );
  }
}
