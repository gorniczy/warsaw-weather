import React from 'react';
import './Forecast.css';

export class Forecast extends React.Component {

  render() {
    const day = ["ND", "PN", "WT", "ŚR", "CZW", "PT", "SB"];
    const dayNum = new Date().getDay();
    let nextDay = [];
    for (var x = dayNum; x < 13; x++) {
      nextDay.push(day[x % 7]);
    }

    return (
      <div className="wrapper">
        <div><p>{nextDay[1]}</p></div>
        <div><p>{nextDay[2]}</p></div>
        <div><p>{nextDay[3]}</p></div>
        <div><p>{nextDay[4]}</p></div>
        <div><p>{nextDay[5]}</p></div>
        <div><p>{this.props.forecastOne}˚</p></div>
        <div><p>{this.props.forecastTwo}˚</p></div>
        <div><p>{this.props.forecastThree}˚</p></div>
        <div><p>{this.props.forecastFour}˚</p></div>
        <div><p>{this.props.forecastFive}˚</p></div>
        <fr className="break_2" />
      </div>
    );
  }

}
