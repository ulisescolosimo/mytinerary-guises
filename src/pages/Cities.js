import React from 'react'
import CitiesEvents from '../components/CitiesEvents'
import '../styles/Cities.css'
import { useState } from 'react'

const Cities = () => {

  const [input, setInput] = useState('')

  const handleInput = (e) => {
    setInput(e.target.value)
  }
  
  return (
    <div className="container-cities">
      <div className="form-container">
        <input className="input" onChange={handleInput} placeholder="Enter city..." required="" type="text" />
        <span className="input-border"></span>
      </div>
      <CitiesEvents input={input} />
    </div>
  )
}

export default Cities


