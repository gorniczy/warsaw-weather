import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DateTime } from './DateTime';
import { Weather } from './Weather';
import { Button } from './Button';
import { Skin } from './Skin';
import registerServiceWorker from './registerServiceWorker';

class ShowWeather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      main: "",
      temperature: "",
      wind: "",
      skin: ""
  }
  this.loadWeather = this.loadWeather.bind(this);
  this.handleSkinChange = this.handleSkinChange.bind(this);
}

  componentDidMount() {
        this.loadWeather();
        this.update = setInterval(
          () => this.loadWeather(),
          300000
        );
        }

  componentWillUnmount() {
    clearInterval(this.update);
  }

  loadWeather() {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=Warsaw,pl&appid=b5daf7d7450518f7ba259ab775096921&units=metric")
      .then(res => res.json())
      .then(
        (result) => {
                this.setState({
                  main: result.weather[0].main,
                  temperature: result.main.temp,
                  wind: result.wind.speed
                });
            },
          );
  }


  handleSkinChange(skin) {
    this.setState({
      skin: {skin}
    })
  }

  render() {
    return (
      <div>
        <Skin value={this.state.skin} />
        <Button className="btn" skin={this.handleSkinChange} />
        <div className="container">
          <Weather main={this.state.main} temperature={this.state.temperature} wind={this.state.wind} />
          <DateTime />
        </div>
      </div>
  )
}

}

ReactDOM.render(<ShowWeather />, document.getElementById('root'));
registerServiceWorker();
