import React from 'react';

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
      <div>
        <a href="#" onClick={this.setSkin} text="Ochota">Ochota</a>
        <a href="#" onClick={this.setSkin} text="Wola">Wola</a>
        <a href="#" onClick={this.setSkin} text="Mokotów">Mokotów</a>
      </div>
    );
  }
}
