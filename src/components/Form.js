import React from 'react'

const Form = ({getWeather}) =>(
<form onSubmit={getWeather}>
        <input type="text" name="city" placeholder="Where?"/>
        <button>Get Weather</button>
      </form>
)

export default Form;