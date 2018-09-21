import React from 'react';
import './Weather.css';

export class Weather extends React.Component {
/*  constructor(props) {
    super(props);
   this.state = {font: ""}
    this.ref = React.createRef();
    this.font = this.font.bind(this);
  } */

  /* font() {
    this.setState({
      font: this.ref.current.offsetWidth * 2.7 + '%'
    })
  }

  componentDidMount() {
    this.font();
    window.addEventListener("resize", this.font);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.font);
  }*/

  render() {
    return (
      <div>
        <p style = {{fontSize: this.props.fontSize}} className="tempC">{this.props.temperature}˚C</p>
        <div className="break_1" />
      </div>
    );
  }
}
