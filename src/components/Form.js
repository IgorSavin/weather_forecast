import React from 'react'

const Form = ({getWeather}) =>(
<form onSubmit={getWeather}>
        <input type="text" name="city" placeholder="Which city?"/>
        <button>Get Weather</button>
      </form>
)

export default Form;