import React from 'react';
import btn_img from './img/button.png';
import './Button.css';

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "none"
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
    display: this.state.display === "block"? "none" : "block"
  });
  }

  render() {
    return (
      <div className="btn" onCLick={this.display}>
        <img src={btn_img} className="btn_img" onCLick={this.display} alt="button" />
        <div className="dropdown" onClick={this.display} style={{display: this.state.display}}>
          <a onClick={this.changeSkin} text="Ochota">Ochota</a>
          <a onClick={this.changeSkin} text="Wola">Wola</a>
          <a onClick={this.changeSkin} text="Mokotów">Mokotów</a>
        </div>
      </div>
    );
  }

}
