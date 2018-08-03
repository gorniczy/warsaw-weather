import React from 'react';

const date = new Date();
const day = ["ND", "PN", "WT", "ŚR", "CZW", "PT", "SB"];
const month = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];

export class DateTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: date.getFullYear(),
      month: month[date.getMonth()],
      date: date.getDate(),
      day: day[date.getDay()],
      time: ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2)
    }
    this.updateTime = this.updateTime.bind(this);
  }

componentDidMount() {
   this.timer = setInterval(
    () => this.updateTime(),
    1000
  );
}

componentWillUnmount() {
  clearInterval(this.timer);
}

  updateTime() {
      const date = new Date();
            this.setState({
              year: date.getFullYear(),
              month: month[date.getMonth()],
              date: date.getDate(),
              day: day[date.getDay()],
              time: ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + ":" + ("0" + date.getSeconds()).slice(-2)
            });
  }


  render() {
    return (
      <p style={{fontFamily: "Arial", fontSize: 25, color: "#4C4C4C"}}>{this.state.day}, {this.state.date}.{this.state.month}.{this.state.year}, {this.state.time}</p>
    );
  }
}
