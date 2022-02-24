import React from "react";

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

  render() {
    return (
      <div className="zimmer-component">
        <div className="zimmer-pic"></div>
        <div className="zimmer-main">
          <h2 className="zimmer-name">{this.state.zimmername}</h2>
          <div className="zimmer-info">
            <p className="zimmer-text">{this.state.standort}</p>
            <p className="zimmer-text">Stockwerk {this.state.stockwerk}</p>
            <p className="zimmer-text">Max. Personen: {this.state.maxP}</p>
          </div>
        </div>
      </div>
    );
  }
}
