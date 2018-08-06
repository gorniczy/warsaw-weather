import React from 'react';
import btn_img from './img/button.png';
import './Button.css';

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.changeSkin = this.changeSkin.bind(this);
  }

  changeSkin(e) {
    const skin = e.target.value;
    this.props.skin(skin);
  }

  render() {
    return (
      <div className="btn">
        <img src={btn_img} alt="button image" />
        <div className="dropdown">
          <a href="" onClick={this.changeSkin} value="Ochota">Ochota</a>
          <a href="" onClick={this.changeSkin} value="Wola">Wola</a>
          <a href="" onClick={this.changeSkin} value="Mokotów">Mokotów</a>
        </div>
      </div>
    );
  }

}
