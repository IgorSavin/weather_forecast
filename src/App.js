import React, { Component } from 'react'
import './App.css'

import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = 'bcdc79a8f818cacdc6dcf850441099a6'

class App extends Component {
  state = {
    temperature: '',
    city: '',
    humidity: '',
    description: '',
    error: ''
  }

  getWeather = async e => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
        API_KEY
      }&units=metric`
    )
    const data = await api_call.json()
    if (city) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      })
    } else {
      this.setState({ ...this.state, error: 'Please choose the city' })
    }
  }

  render() {
    return (
      <div>
        <div className="wrapper">
            <div className="container">
              <div className="row">
              <div className="col-xs-5 title-container">
              <Title />
              </div>
              <div className="col-xs-7 form-container">
              <Form getWeather={this.getWeather} />
                <Weather
                  temperature={this.state.temperature}
                  city={this.state.city}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                />
              </div>      
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default App
