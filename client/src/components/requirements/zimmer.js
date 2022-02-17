import React from "react";

export default class Zimmer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zimmername: props.zimmername,
      standort: props.standortName,
      stockwerk: props.stockwerk,
      maxP: props.maxP,
    };
  }

  render() {
    return (
      <div className="zimmer-component">
        <div className="zimmer-pic"></div>
        <div className="zimmer-main">
          <h2 className="zimmer-name">{this.state.zimmername}</h2>
          <div className="zimmer-info">
            <p>{this.state.standort}</p>
            <p>{this.state.stockwerk} Stockwerk</p>
            <p>Max. Personen: {this.state.maxP}</p>
          </div>
        </div>
      </div>
    );
  }
}
