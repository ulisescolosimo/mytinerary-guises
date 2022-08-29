import React from 'react'
import '../styles/NewCities.css'

const Input = ({myRef, name}) => {

  return (
            <label className="input-label" htmlFor={name}>{name[0].toUpperCase() + name.substring(1)}
              <input type="text" className="input-form" id={name} ref={myRef} />
            </label>  
  )
}

export default Input