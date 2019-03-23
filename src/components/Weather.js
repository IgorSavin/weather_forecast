import React from 'react'

const Weather = ({city, temperature, humidity, description, error}) => (
    <div>
      {city && <p>Location: {city}</p>}
      {temperature && <p>Temperature: {temperature}</p>}
      {humidity && <p>Humidity: {humidity}</p>}
      {description && <p>Conditions: {description}</p>}
      {error && <p>{error}</p>}
    </div>
  )


export default Weather
