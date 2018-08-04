import React from 'react';

export class DateTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      year: "",
      month: "",
      date: "",
      day: "",
      time: ""
    }
    this.loadTime = this.loadTime.bind(this);
  }

componentDidMount() {
  this.loadTime();
  this.timer = setInterval(
    () => this.loadTime(),
    1000
  );
}

componentWillUnmount() {
  clearInterval(this.timer);
}

  loadTime() {
    const date = new Date();
    const day = ["ND", "PN", "WT", "ŚR", "CZW", "PT", "SB"];
    const month = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
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
