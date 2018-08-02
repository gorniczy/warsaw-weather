import React from 'react';

class DateTime extends React.Component {
  constructor(props) {
    super(props);
    this.state {
      year: "",
      month: "",
      date: "",
      day: "",
      time: ""
    };
  }

  componentDidMount() {
    const date = new Date();
    const day = ["ND", "PN", "WT", "ŚR", "CZW", "PT", "SB"];
    const month = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
    setInterval(() => {
            this.setState({
              year: date.getFullYear(),
              month: month[date.getMonth()],
              date: date.getDate(),
              day: day[date.getDay()],
              time: date.getHours()+ ":" + date.getMinutes() + ":" + date.getSeconds()
            });
        }, 1000);
  }
} 

render() {
  return (
    <p>{this.state.day}, {this.state.date}.{this.state.month}.{this.state.year}, {this.state.time}</p>
  );
}
