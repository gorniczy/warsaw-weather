import React from 'react';
import btn_img from './img/button.png';
import './Button.css';

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="btn">
        <img src={btn_img} alt="button image" />
        <div className="dropdown">
          <a href="">Ochota</a>
          <a href="">Wola</a>
          <a href="">Mokotów</a>
        </div>
      </div>
    );
  }

}
