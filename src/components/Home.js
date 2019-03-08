import React, { Component } from 'react';
import axios from 'axios';
const BASE_API_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=052f26926ae9784c2d677ca7bc5dec98'

class Home extends Component {
  constructor() {
    super();

    this.state = {
      city: 'Macedonia',
      desc: '',
      icon: '10d',
      temp: '-'
    }
  }

  getWeather = () => {
    axios.get(`${BASE_API_URL}&q=${this.state.city}`)
      .then(res => {
        let f = (res.data.main.temp -273) * (9/5) + 32;
        this.setState({
          temp:f.toFixed(1),
          icon: res.data.weather[0].icon,
          desc: `Looks like some ${res.data.weather[0].description} out there!`
        });
      })
      .catch(err => console.log(err));
  }

  handleSubmit = e => {
    e.preventDefault();
    this.getWeather();
  }

  componentDidMount() {
    this.getWeather();
  }

  render() {

    return (
      <div >
        <h2>Hey {this.props.name} from {this.state.city}!</h2>

        <div className="box">
          <h3>Your current weather is: {this.state.temp}°F</h3>
          <div>
            <img alt="weather icon" className="icon"
              src={`http://openweathermap.org/img/w/${this.state.icon}.png`} />
          </div>
          <div>
            &nbsp;{this.state.desc}&nbsp;
          </div>
        </div>

        <hr />

        <h3>Not from {this.state.city}?</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.city}
            onChange={ e => this.setState({city:e.target.value})}
          />
          <input type="submit"
            value="Check My Weather!"
          />
        </form>

      </div>
    );
  }
}

export default Home;
