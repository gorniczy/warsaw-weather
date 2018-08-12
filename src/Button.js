import React from 'react';
import btn_img from './img/button.png';
import './Button.css';

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.changeSkin = this.changeSkin.bind(this);
  }

  changeSkin(e) {
    const skinName = e.target.text;
    this.props.skin(skinName);
  }

  render() {
    return (
      <div className="btn">
        <img src={btn_img} alt="button image" />
        <div className="dropdown">
          <a href="#" onClick={this.changeSkin} text="Ochota">Ochota</a>
          <a href="#" onClick={this.changeSkin} text="Wola">Wola</a>
          <a href="#" onClick={this.changeSkin} text="Mokotów">Mokotów</a>
        </div>
      </div>
    );
  }

}
