import React from 'react';
import logo from '../img/logo.png'
import './Title.css';

// placeholder for title screen

export class Title extends React.Component {
  constructor(props) {
    super(props);
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
        <a className="districts" onClick={this.setSkin}>placeholder1</a>
        <a className="districts" onClick={this.setSkin}>placeholder2</a>
        <a className="districts" onClick={this.setSkin}>placeholder3</a>
      </div>
    );
  }
}
