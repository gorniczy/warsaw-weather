import React from 'react';
import './Weather.css';


export const Weather = (props) => {
  return (
    <div>
      <p className="tempC">{props.temperature}˚C</p>
      <div className="break_1" />
    </div>
  );
}

/*
export class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.container = React.createRef()
  }

  componentDidMount() {
    console.log(this.container.current.offsetWidth)
  }

  render() {
    return (
      <div>
        <p className="tempC">{props.temperature}˚C</p>
        <div className="break_1" />
      </div>
    );
  }
}
*/
