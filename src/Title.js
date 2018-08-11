import React from 'react';
import title_img from './img/Title-background.png';
import logo from './img/logo.png'
import './Title.css';

export class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.setSkin = this.setSkin.bind(this);
  }

  componentWillMount() {
    document.body.style.backgroundImage = "url(" + title_img + ")";
  }

  componentWillUnmount() {
    document.body.style.backgroundImage = "none";
  }

  setSkin(e) {
    const skinName = e.target.text;
    this.props.title(skinName);
  }

  render() {
    return (
      <div className="content">
        <img className="logo" src={logo} alt="logo" />
        <a className="districts" href="#" onClick={this.setSkin} text="Ochota">OCHOTA</a>
        <a className="districts" href="#" onClick={this.setSkin} text="Wola">WOLA</a>          <a className="districts" href="#" onClick={this.setSkin} text="Mokotów">MOKOTÓW</a>
      </div>
    );
  }
}
