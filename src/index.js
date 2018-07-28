import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

class ShowWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      main: "",
      temperature: ""
    };

  }

  componentDidMount() {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=Warsaw,pl&appid=b5daf7d7450518f7ba259ab775096921&units=metric")
      .then(res => res.json())
      .then(
        (result) => {
                this.setState({
                  main: result.weather[0].main,
                  temperature: result.main.temp
                });
            },
          )
        }

  render() {
    return (
      <div style={{position: "absolute", top: "30%", left: "20%"}}>
        <p style={{fontFamily: "Arial", fontSize: 40, color: "#4182BD"}}>{this.state.main}</p>
        <p style={{fontFamily: "Arial", fontSize: 40, color: "#BD4141"}}>{this.state.temperature}˚C</p>
      </div>
  )
}

}

ReactDOM.render(<ShowWeather />, document.getElementById('root'));
registerServiceWorker();
