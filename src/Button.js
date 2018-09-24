import React from 'react';
import btn_img from './img/button.png';
import './Button.css';

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayBlock: "none",
      displayFlex: "none"
    }
    this.changeSkin = this.changeSkin.bind(this);
    this.display = this.display.bind(this);
  }

  changeSkin(e) {
    const skinName = e.target.text;
    this.props.skin(skinName);
  }

  display() {
    this.setState({
    displayBlock: this.state.displayBlock === "block"? "none" : "block",
    displayFlex: this.state.displayFlex === "flex"? "none" : "flex"
  });
  }

  render() {
    return (
      <div onMouseEnter={this.display} onMouseLeave={this.display}>
        <div className="btn">
          <img src={btn_img} className="btn_img" alt="button" />
        </div>
        <div className="dropdown" style={{display: window.matchMedia("(orientation: landscape)").matches ? this.state.displayBlock : this.state.displayFlex}}>
          <a onClick={this.changeSkin} text="Ochota" style={{fontSize: this.props.fontSize}}>Ochota</a>
          <a onClick={this.changeSkin} text="Wola" style={{fontSize: this.props.fontSize}}>Wola</a>
          <a onClick={this.changeSkin} text="Mokotów" style={{fontSize: this.props.fontSize}}>Mokotów</a>
        </div>
      </div>
    );
  }

}
