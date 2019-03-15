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
  //
  // changeSkin = (e) => {
  //   const skinName = e.target.text;
  //   this.props.skin(skinName);
  // }

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
        <ul className="dropdown" style={{ display: this.state.display }}>
          <li
            onClick={() => this.props.skin("Ochota")}
            style={{ fontSize: this.props.fontSize }}
          >
            Ochota
          </li>
          <li
            onClick={() => this.props.skin("Wola")}
            style={{ fontSize: this.props.fontSize }}
          >
            Wola
          </li>
          <li
            onClick={() => this.props.skin("Mokotów")}
            style={{ fontSize: this.props.fontSize }}
          >
            Mokotów
          </li>
        </ul>
      </div>
    );
  }
}
