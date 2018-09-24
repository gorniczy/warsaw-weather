import React from 'react';
import './Weather.css';

export class Weather extends React.Component {

  render() {
    return (
      <div>
        <p className="tempC" style = {{fontSize: this.props.fontSize}}>{this.props.temperature}˚C</p>
        <div className="break_1" />
      </div>
    );
  }
}
