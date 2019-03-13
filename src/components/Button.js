import React from "react";
import btn_img from "../img/button.png";
import "./Button.css";

export class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "none"
    };
  }

  changeSkin = (e) => {
    const skinName = e.target.text;
    this.props.skin(skinName);
  }

  display = () => {
    this.setState({
      display: this.state.display === "flex" ? "none" : "flex"
    });
  }

  render() {
    return (
      <div onMouseEnter={this.display} onMouseLeave={this.display}>
        <div className="btn">
          <img src={btn_img} className="btn_img" alt="button" />
        </div>
        <div className="dropdown" style={{ display: this.state.display }}>
          <a
            onClick={this.changeSkin}
            text="Ochota"
            style={{ fontSize: this.props.fontSize }}
          >
            Ochota
          </a>
          <a
            onClick={this.changeSkin}
            text="Wola"
            style={{ fontSize: this.props.fontSize }}
          >
            Wola
          </a>
          <a
            onClick={this.changeSkin}
            text="Mokotów"
            style={{ fontSize: this.props.fontSize }}
          >
            Mokotów
          </a>
        </div>
      </div>
    );
  }
}
