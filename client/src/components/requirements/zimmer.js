import React from 'react';

export default class Zimmer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zimmername: props.zimmername,
      standort: props.standortName,
      stockwerk: props.stockwerk,
      maxP: props.maxP
    }
  }

  render() {
    return (
      <div>
        <h1>Name: {this.state.zimmername}</h1>
        <p>Standort: {this.state.standort}</p>
        <p>Stockwerk: {this.state.stockwerk}</p>
        <p>Max. Personen: {this.state.maxP}</p>
      </div>
    );
  }
}

