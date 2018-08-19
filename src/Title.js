import React from 'react';
import logo from './img/logo.png'
import './Title.css';

export class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.setSkin = this.setSkin.bind(this);
  }

  setSkin(e) {
    const skinName = e.target.text;
    this.props.title(skinName);
  }

  render() {
    return (
      <div className="content">
        <img className="logo" src={logo} alt="logo" />
        <a className="districts" onClick={this.setSkin}>OCHOTA</a>
        <a className="districts" onClick={this.setSkin} text="Wola">WOLA</a>
        <a className="districts" onClick={this.setSkin} text="Mokotów">MOKOTÓW</a>
      </div>
    );
  }
}
